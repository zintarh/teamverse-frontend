import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('invitations')
@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new invitation' })
  @ApiResponse({ status: 201, description: 'Invitation created successfully' })
  async createInvitation(
    @Body() createInvitationDto: CreateInvitationDto,
    @Query('senderId') senderId: string,
  ) {
    return this.invitationsService.createInvitation({
      ...createInvitationDto,
      senderId,
    });
  }

  @Get('team/:teamId')
  @ApiOperation({ summary: 'Get team invitations' })
  @ApiResponse({
    status: 200,
    description: 'Returns all pending invitations for a team',
  })
  async getTeamInvitations(@Param('teamId') teamId: string) {
    return this.invitationsService.getTeamInvitations(teamId);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get user invitations' })
  @ApiResponse({
    status: 200,
    description: 'Returns all pending invitations for the user',
  })
  async getUserInvitations(@Param('userId') userId: string) {
    return this.invitationsService.getUserInvitations(userId);
  }

  @Get(':token')
  @ApiOperation({ summary: 'Get invitation details by token' })
  @ApiResponse({ status: 200, description: 'Returns invitation details' })
  @ApiResponse({ status: 404, description: 'Invitation not found' })
  async getInvitationByToken(@Param('token') token: string) {
    return this.invitationsService.getInvitationByToken(token);
  }

  @Post(':token/accept')
  @ApiOperation({ summary: 'Accept invitation' })
  @ApiResponse({ status: 200, description: 'Invitation accepted' })
  async acceptInvitation(
    @Param('token') token: string,
    @Query('userId') userId: string,
  ) {
    return this.invitationsService.acceptInvitation(token, userId);
  }

  @Post(':token/reject')
  @ApiOperation({ summary: 'Reject invitation' })
  @ApiResponse({ status: 200, description: 'Invitation rejected' })
  async rejectInvitation(
    @Param('token') token: string,
    @Query('userId') userId: string,
  ) {
    return this.invitationsService.rejectInvitation(token, userId);
  }
}
