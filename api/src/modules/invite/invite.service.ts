import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendInviteDto } from './dto/send.invite.dto';
import { randomUUID } from 'crypto';
import { addMinutes } from 'date-fns';
import { sendInviteEmail } from '../../shared/utils/mailer.service';

@Injectable()
export class InviteService {
  constructor(private prisma: PrismaService) {}

  async sendInvite(dto: SendInviteDto) {
    const token = randomUUID();
    const expiresAt = addMinutes(new Date(), 60);

    const invite = await this.prisma.invite.create({
      data: {
        email: dto.email,
        token,
        teamId: dto.teamId,
        expiresAt,
      },
    });

    await sendInviteEmail(dto.email, token);

    return { message: 'Invite sent', token };
  }

  async acceptInvite(token: string) {
    const invite = await this.prisma.invite.findUnique({
      where: { token },
    });

    if (!invite) throw new Error('Invalid invite');
    if (invite.expiresAt < new Date()) throw new Error('Invite expired');
    if (invite.accepted) throw new Error('Invite already accepted');

    // TODO: connect user to team — for now just mark accepted
    await this.prisma.invite.update({
      where: { token },
      data: {
        accepted: true,
      },
    });

    return { message: 'Invite accepted' };
  }
}
