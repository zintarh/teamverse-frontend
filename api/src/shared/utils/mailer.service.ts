import * as nodemailer from 'nodemailer';

export async function sendInviteEmail(to: string, token: string) {
  const transporter = await nodemailer.createTestAccount().then((testAccount) =>
    nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    }),
  );

  const info = await transporter.sendMail({
    from: '"TeamVerse" <no-reply@teamverse.dev>',
    to,
    subject: 'You’ve been invited to join a team on TeamVerse!',
    html: `
      <h3>Hello 👋</h3>
      <p>You’ve been invited to join a team. Click below to accept your invite:</p>
      <a href="http://localhost:3000/invite/accept?token=${token}">Accept Invite</a>
      <p>This link will expire in 15 minutes.</p>
    `,
  });

  console.log(`📩 Preview your email: ${nodemailer.getTestMessageUrl(info)}`);
}
