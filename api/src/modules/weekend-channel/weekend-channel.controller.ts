import { Body, Get, Param, Post } from '@nestjs/common';
import { CreateWeekendChannelDto } from './dto/create-weekend-channel.dto';
import { WeekendChannelService } from './weekend-channel.service';

export class WeekendChannelController {
  constructor(private readonly weekendChannelService: WeekendChannelService) {}

  //Create a new team
  @Post()
  create(@Body() createWeekendChannelDto: CreateWeekendChannelDto) {
    return this.weekendChannelService.createWeekendChannel(
      createWeekendChannelDto,
    );
  }

  //Get all channels
  @Get()
  findAll() {
    return this.weekendChannelService.findAllWeekendChannels();
  }

  //Get channel by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weekendChannelService.findWeekendChannelById(+id);
  }
}
