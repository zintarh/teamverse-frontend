import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWeekendChannelDto } from './dto/create-weekend-channel.dto';

@Injectable()
export class WeekendChannelService {
  constructor(private prisma: PrismaService) {}

  async createWeekendChannel(createWeekendChannelDto: CreateWeekendChannelDto) {
    return this.prisma.weekendChannel.create({
      data: {
        teamId: createWeekendChannelDto.teamId,
      },
    });
  }

  public findAllWeekendChannels() {
    return this.prisma.weekendChannel.findMany();
  }

  public findWeekendChannelById(id: number) {
    return this.prisma.weekendChannel.findUnique({ where: { id } });
  }
}
WeekendChannelService;
