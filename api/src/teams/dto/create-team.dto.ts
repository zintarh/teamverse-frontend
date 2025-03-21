import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsArray,
  IsEmail,
} from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  inviteEmails?: string[];
}
