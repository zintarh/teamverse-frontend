import { IsArray, ArrayMinSize, ArrayMaxSize, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @IsArray()
  @ArrayMinSize(3, { message: 'Exactly three statements are required' })
  @ArrayMaxSize(3, { message: 'Exactly three statements are required' })
  @IsString({ each: true, message: 'Each statement must be a string' })
  statements: string[];
}
