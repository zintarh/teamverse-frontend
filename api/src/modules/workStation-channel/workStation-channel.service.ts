import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      return await this.prisma.workStationChannel.create({
        data: { teamId: createWorkstationChannel.teamId },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to create Workstation Channel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Get all Workstation Channels
  public async findAllWorkStationChannels() {
    try {
      return await this.prisma.workStationChannel.findMany();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Workstation Channels',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Get Workstation Channel by ID
  public async findOneWorkStationChannel(id: number) {
    try {
      const channel = await this.prisma.workStationChannel.findUnique({
        where: { id },
      });
      if (!channel) {
        throw new HttpException(
          `Workstation Channel with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return channel;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Workstation Channel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Get Workstation Channels by Team ID
  public async findWorkStationChannelByTeamId(teamId: number) {
    try {
      return await this.prisma.workStationChannel.findMany({
        where: { teamId },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Workstation Channels by Team ID',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
