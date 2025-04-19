import { Injectable } from '@nestjs/common';
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
    // this.prisma.team.findUnique({
    //   where: { id: team.id },
    //   include: { channels: true },
    // });
  }

  public async findAllTeams() {
    return this.prisma.team.findMany({ include: { channels: true } });
  }

  public async findTeamById(id: number) {
    return this.prisma.team.findUnique({
      where: { id },
      include: { channels: true },
    });
  }

  public async findAllTeamChannels() {
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
  }
}
// @Injectable()
// export class TeamService {
//   constructor(
//     private prisma: PrismaService,
//     private teamChannelsService: TeamChannelsService,
//   ) {}

//   async createTeam(createTeamDto: CreateTeamDto) {
//     const team = await this.prisma.team.create(createTeamDto);

//     // Automatically create default channels for the new team
//     await this.teamChannelsService.createChannel(team.id);

//     return team;
//   }
// }
