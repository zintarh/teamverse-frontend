import { Body, Controller, Post, Query } from '@nestjs/common';
import { InviteService } from './invite.service';
import { SendInviteDto } from './dto/send.invite.dto';

@Controller('invite')
export class InviteController {
  constructor(private inviteService: InviteService) {}

  @Post()
  sendInvite(@Body() dto: SendInviteDto) {
    return this.inviteService.sendInvite(dto);
  }

  @Post('accept')
  acceptInvite(@Query('token') token: string) {
    return this.inviteService.acceptInvite(token);
  }
}
