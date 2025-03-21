import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateInvitationDto {
  @IsNotEmpty()
  @IsString()
  teamId: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
