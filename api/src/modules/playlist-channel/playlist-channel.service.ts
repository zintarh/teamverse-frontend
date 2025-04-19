import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlaylistChannelDto } from './dto/create-playlist-channel.dto';

@Injectable()
export class PlaylistChannelService {
  constructor(private prisma: PrismaService) {}

  async createPlaylistChannel(
    createPlaylistChannelDto: CreatePlaylistChannelDto,
  ) {
    try {
      return await this.prisma.playlistChannel.create({
        data: { teamId: createPlaylistChannelDto.teamId },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to create Playlist Channel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findAllPlaylistChannels() {
    try {
      return await this.prisma.playlistChannel.findMany();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Playlist Channels',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findPlaylistChannelById(id: number) {
    try {
      const channel = await this.prisma.playlistChannel.findUnique({
        where: { id },
      });
      if (!channel) {
        throw new HttpException(
          `Playlist Channel with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return channel;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Playlist Channel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
