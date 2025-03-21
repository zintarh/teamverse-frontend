import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { PrismaModule } from '../modules/prisma/prisma.module';
import { InvitationsModule } from '../invitations/invitations.module';

@Module({
  imports: [PrismaModule, InvitationsModule],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
