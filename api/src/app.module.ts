import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { InviteModule } from './modules/invite/invite.module';
@Module({
  imports: [PrismaModule, InviteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
