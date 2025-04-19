import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlaylistChannelDto } from './dto/create-playlist-channel.dto';

@Injectable()
export class PlaylistChannelService {
  constructor(private prisma: PrismaService) {}

  async createPlaylistChannel(
    createPlaylistChannelDto: CreatePlaylistChannelDto,
  ) {
    return this.prisma.playlistChannel.create({
      data: { teamId: createPlaylistChannelDto.teamId },
    });
  }

  public findAllPlaylistChannels() {
    return this.prisma.playlistChannel.findMany();
  }
  // public findPlaylistChannelByTeamId(teamId: number) {
  //   return this.prisma.playlistChannel.findMany({
  //     where: { teamId },
  //   });
  // }

  async findPlaylistChannelById(id: number) {
    return this.prisma.playlistChannel.findUnique({ where: { id } });
  }
}
