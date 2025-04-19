import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { PrismaService } from '../prisma/prisma.service';
import { WeekendChannelService } from '../weekend-channel/weekend-channel.service';
import { WorkstationChannelService } from '../workStation-channel/workStation-channel.service';
import { PlaylistChannelService } from '../playlist-channel/playlist-channel.service';

@Injectable()
export class TeamsService {
  constructor(
    private prisma: PrismaService,
    private weekendChannelService: WeekendChannelService,
    private workstationChannelService: WorkstationChannelService,
    private playlistChannelService: PlaylistChannelService,
  ) {}

  async createTeam(dto: CreateTeamDto) {
    try {
      // Create team
      const team = await this.prisma.team.create({
        data: dto,
      });

      // Create default channels
      const [weekend, workstation, playlist] = await Promise.all([
        this.weekendChannelService.createWeekendChannel({ teamId: team.id }),
        this.workstationChannelService.createWorkStation({ teamId: team.id }),
        this.playlistChannelService.createPlaylistChannel({
          teamId: team.id,
        }),
      ]);

      // Fetch the created team with channels
      return { ...team, channels: [weekend, workstation, playlist] };
    } catch (error) {
      throw new HttpException(
        'Failed to create Team and its default channels',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findAllTeams() {
    try {
      return await this.prisma.team.findMany({ include: { channels: true } });
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Teams',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findTeamById(id: number) {
    try {
      const team = await this.prisma.team.findUnique({
        where: { id },
        include: { channels: true },
      });
      if (!team) {
        throw new HttpException(
          `Team with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return team;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Team',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findAllTeamChannels() {
    try {
      const teams = await this.prisma.team.findMany();

      const teamChannels = await Promise.all(
        teams.map(async (team) => {
          const [weekend, playlist, workStation] = await Promise.all([
            this.prisma.weekendChannel.findMany({
              where: { teamId: team.id },
            }),
            this.prisma.workStationChannel.findMany({
              where: { teamId: team.id },
            }),
            this.prisma.playlistChannel.findMany({
              where: { teamId: team.id },
            }),
          ]);
          return { weekend, playlist, workStation };
        }),
      );
      return teamChannels;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve Team Channels',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
