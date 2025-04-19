import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { WeekendChannelService } from './weekend-channel.service';

@Module({
  imports: [PrismaModule],
  providers: [WeekendChannelService],
  exports: [WeekendChannelService],
})
export class WeekendChannelModule {}
