import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { TeamModule } from './modules/team/team.module';

@Module({
  imports: [PrismaModule, SubmissionsModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
