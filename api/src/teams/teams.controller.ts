import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new team' })
  @ApiResponse({ status: 201, description: 'Team created successfully' })
  async createTeam(
    @Body() createTeamDto: CreateTeamDto,
    @Query('userId') userId: string,
  ) {
    return this.teamsService.createTeam(userId, createTeamDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get user teams' })
  @ApiResponse({
    status: 200,
    description: 'Returns all teams the user is a member of',
  })
  async getUserTeams(@Param('userId') userId: string) {
    return this.teamsService.getUserTeams(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get team details' })
  @ApiResponse({ status: 200, description: 'Returns team details' })
  @ApiResponse({ status: 404, description: 'Team not found' })
  async getTeam(@Param('id') id: string) {
    return this.teamsService.getTeam(id);
  }
}
