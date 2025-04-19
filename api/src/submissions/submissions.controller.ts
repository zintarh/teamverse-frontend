import { Controller, Post, Body, Get, BadRequestException } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { SubmissionsService } from './submissions.service';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  async create(@Body() createSubmissionDto: CreateSubmissionDto) {
    if (!Array.isArray(createSubmissionDto.statements) || createSubmissionDto.statements.length !== 3) {
      throw new BadRequestException('Exactly three statements are required');
    }
    return await this.submissionsService.createSubmission(createSubmissionDto.statements);
  }

  @Get()
  async findAll() {
    return await this.submissionsService.getSubmissions();
  }
}
