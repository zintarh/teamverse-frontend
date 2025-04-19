import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamsService: TeamsService) {}

  //Create a new team
  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.createTeam(createTeamDto);
  }

  //Get all teams
  @Get()
  findAll() {
    return this.teamsService.findAllTeams();
  }

  //Get teams by Id
  // @Get(':id')
  // findOne(@Param('id') id?: string) {
  //   return this.teamsService.findTeamById(+id);
  // }

  //Get all channelTeams
  @Get('/channels')
  findAllTeamChannels() {
    return this.teamsService.findAllTeamChannels();
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
  //   return this.teamService.update(+id, updateTeamDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.teamService.remove(+id);
}
