import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('MAIL_HOST'),
      port: this.configService.get('MAIL_PORT'),
      secure: this.configService.get('MAIL_SECURE') === 'true',
      auth: {
        user: this.configService.get('MAIL_USER'),
        pass: this.configService.get('MAIL_PASSWORD'),
      },
    });
  }

  async sendTeamInvitation(invitation) {
    const appUrl = this.configService.get('APP_URL');
    const inviteUrl = `${appUrl}/invitations/${invitation.token}`;

    await this.transporter.sendMail({
      from: `"Your App" <${this.configService.get('MAIL_FROM')}>`,
      to: invitation.email,
      subject: `You've been invited to join ${invitation.team.name}`,
      html: `
        <h1>Team Invitation</h1>
        <p>${invitation.sender.name || invitation.sender.email} has invited you to join ${invitation.team.name}.</p>
        <p>Click the link below to accept the invitation:</p>
        <a href="${inviteUrl}" style="display:inline-block;background:#4f46e5;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">
          Accept Invitation
        </a>
        <p>This invitation will expire in 7 days.</p>
      `,
    });
  }
}
