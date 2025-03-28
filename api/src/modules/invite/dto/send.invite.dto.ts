import { IsEmail, IsNotEmpty, IsInt } from 'class-validator';

export class SendInviteDto {
  @IsEmail()
  email: string;

  @IsInt()
  teamId: number;
}
