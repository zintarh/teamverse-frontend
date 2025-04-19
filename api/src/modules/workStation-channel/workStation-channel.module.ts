import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { WorkstationChannelService } from './workStation-channel.service';

@Module({
  imports: [PrismaModule],
  providers: [WorkstationChannelService],
  exports: [WorkstationChannelService],
})
export class WorkstationChannelModule {}
