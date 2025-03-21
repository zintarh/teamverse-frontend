import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { randomBytes } from 'crypto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class InvitationsService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  async createInvitation({ teamId, email, senderId }) {
    // Check if team exists
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
    });

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    // Check if user is already a member
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      include: {
        teams: {
          where: { teamId },
        },
      },
    });

    if (existingUser?.teams?.length > 0) {
      throw new BadRequestException('User is already a member of this team');
    }

    // Check for pending invitation
    const pendingInvitation = await this.prisma.invitation.findFirst({
      where: {
        teamId,
        email,
        status: 'pending',
      },
    });

    if (pendingInvitation) {
      throw new BadRequestException('Invitation already sent to this email');
    }

    // Generate unique token
    const token = randomBytes(32).toString('hex');

    // Set expiration to 7 days from now
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    // Create invitation
    const invitation = await this.prisma.invitation.create({
      data: {
        teamId,
        senderId,
        email,
        token,
        expiresAt,
        recipientId: existingUser?.id || null,
      },
      include: {
        team: true,
        sender: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Send invitation email
    await this.mailService.sendTeamInvitation(invitation);

    return invitation;
  }

  async getInvitationByToken(token: string) {
    const invitation = await this.prisma.invitation.findUnique({
      where: { token },
      include: {
        team: true,
        sender: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!invitation) {
      throw new NotFoundException('Invitation not found');
    }

    if (invitation.status !== 'pending') {
      throw new BadRequestException('Invitation has already been processed');
    }

    if (invitation.expiresAt < new Date()) {
      throw new BadRequestException('Invitation has expired');
    }

    return invitation;
  }

  async acceptInvitation(token: string, userId: string) {
    const invitation = await this.getInvitationByToken(token);

    return this.prisma.$transaction(async (tx) => {
      // Update invitation status
      await tx.invitation.update({
        where: { id: invitation.id },
        data: {
          status: 'accepted',
          recipientId: userId,
        },
      });

      // Create team member
      return tx.teamMember.create({
        data: {
          teamId: invitation.teamId,
          userId,
          role: 'member',
        },
        include: {
          team: true,
        },
      });
    });
  }

  async rejectInvitation(token: string, userId: string) {
    const invitation = await this.getInvitationByToken(token);

    return this.prisma.invitation.update({
      where: { id: invitation.id },
      data: {
        status: 'rejected',
        recipientId: userId,
      },
    });
  }

  async getTeamInvitations(teamId: string) {
    return this.prisma.invitation.findMany({
      where: {
        teamId,
        status: 'pending',
      },
      include: {
        sender: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async getUserInvitations(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { email: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.invitation.findMany({
      where: {
        OR: [{ recipientId: userId }, { email: user.email }],
        status: 'pending',
      },
      include: {
        team: true,
        sender: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }
}
