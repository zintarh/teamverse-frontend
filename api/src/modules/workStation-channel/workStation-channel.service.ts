import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkStationChannelDto } from './dto/create-workStation-channel.dto';
import { UpdateWorkStationChannelDto } from './dto/update-workStation.dto';

@Injectable()
export class WorkstationChannelService {
  constructor(private prisma: PrismaService) {}

  // Create a new Workstation Channel
  async createWorkStation(
    createWorkstationChannel: CreateWorkStationChannelDto,
  ) {
    return this.prisma.workStationChannel.create({
      data: { teamId: createWorkstationChannel.teamId },
    });
  }

  // Get all Workstation Channels
  public findAllWorkStationChannels() {
    return this.prisma.workStationChannel.findMany();
  }

  // Get Workstation Channel by ID
  public findOneWorkStationChannel(id: number) {
    return this.prisma.workStationChannel.findUnique({ where: { id } });
  }

  // Get Workstation Channels by Team ID
  public findWorkStationChannelByTeamId(teamId: number) {
    return this.prisma.workStationChannel.findMany({
      where: { teamId },
    });
  }

  //Edit Workstation Channel by ID
  // public async editWorkStationChannelById(
  //   updateWorkStationChannelDto: UpdateWorkStationChannelDto,
  // ) {
  //   const team = await this.prisma.workStationChannel.findUnique({
  //     where: { id: updateWorkStationChannelDto.id },
  //   });
  //   if (!team) {
  //     throw new Error('Channel not found');
  //   }

  //   return this.prisma.workStationChannel.update({
  //     where: { id: team.id },
  //     data: {
  //       name: { set: updateWorkStationChannelDto.name },
  //     },
  //   });
  // }
}
