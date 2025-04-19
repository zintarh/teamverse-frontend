import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWeekendChannelDto } from './dto/create-weekend-channel.dto';

@Injectable()
export class WeekendChannelService {
  constructor(private prisma: PrismaService) {}

  async createWeekendChannel(createWeekendChannelDto: CreateWeekendChannelDto) {
    try {
      return await this.prisma.weekendChannel.create({
        data: {
          teamId: createWeekendChannelDto.teamId,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to create Weekend Channel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findAllWeekendChannels() {
    try {
      return await this.prisma.weekendChannel.findMany();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Weekend Channels',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findWeekendChannelById(id: number) {
    try {
      const channel = await this.prisma.weekendChannel.findUnique({
        where: { id },
      });
      if (!channel) {
        throw new HttpException(
          `Weekend Channel with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return channel;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Weekend Channel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
