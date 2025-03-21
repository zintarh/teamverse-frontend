import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { InvitationsService } from '../invitations/invitations.service';

@Injectable()
export class TeamsService {
  constructor(
    private prisma: PrismaService,
    private invitationsService: InvitationsService,
  ) {}

  async createTeam(userId: string, createTeamDto: CreateTeamDto) {
    const { name, description, inviteEmails } = createTeamDto;

    // Generate a unique slug from team name
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    // Create the team and add creator as admin in a transaction
    const team = await this.prisma.$transaction(async (tx) => {
      // Create team
      const newTeam = await tx.team.create({
        data: {
          name,
          description,
          slug,
        },
      });

      // Add creator as team admin
      await tx.teamMember.create({
        data: {
          userId,
          teamId: newTeam.id,
          role: 'admin',
        },
      });

      return newTeam;
    });

    // Send invitations if provided
    if (inviteEmails && inviteEmails.length > 0) {
      await Promise.all(
        inviteEmails.map((email) =>
          this.invitationsService.createInvitation({
            teamId: team.id,
            email,
            senderId: userId,
          }),
        ),
      );
    }

    return team;
  }

  async getTeam(teamId: string) {
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    return team;
  }

  async getUserTeams(userId: string) {
    return this.prisma.team.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        _count: {
          select: { members: true },
        },
      },
    });
  }
}
