import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { WeekendChannelModule } from '../weekend-channel/weekend-channel.module';
import { WorkstationChannelModule } from '../workStation-channel/workStation-channel.module';
import { PlaylistChannelModule } from '../playlist-channel/playlist-channel.module';
import { TeamsService } from './team.service';

@Module({
  controllers: [TeamController],
  providers: [TeamsService],
  imports: [
    PrismaModule,
    WeekendChannelModule,
    WorkstationChannelModule,
    PlaylistChannelModule,
  ],
  exports: [TeamsService],
})
export class TeamModule {}
