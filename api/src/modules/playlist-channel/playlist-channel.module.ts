import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PlaylistChannelService } from './playlist-channel.service';

@Module({
  imports: [PrismaModule],
  providers: [PlaylistChannelService],
  exports: [PlaylistChannelService],
})
export class PlaylistChannelModule {}
