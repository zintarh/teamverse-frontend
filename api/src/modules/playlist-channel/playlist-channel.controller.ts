import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlaylistChannelService } from './playlist-channel.service';
import { CreatePlaylistChannelDto } from './dto/create-playlist-channel.dto';

@Controller('playlist-channel')
export class PlaylistController {
  constructor(
    private readonly playlistChannelService: PlaylistChannelService,
  ) {}

  //Create a new team
  @Post()
  create(@Body() createPlaylistChannelDto: CreatePlaylistChannelDto) {
    return this.playlistChannelService.createPlaylistChannel(
      createPlaylistChannelDto,
    );
  }

  //Get all channels
  @Get()
  findAll() {
    return this.playlistChannelService.findAllPlaylistChannels();
  }

  //Get channel by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistChannelService.findPlaylistChannelById(+id);
  }
}
