import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkStationChannelDto } from './create-workStation-channel.dto';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { ChannelType } from 'src/common/enums/channels.enum';

export class UpdateWorkStationChannelDto extends PartialType(
  CreateWorkStationChannelDto,
) {
  @IsNotEmpty()
  @IsEnum({ enum: ChannelType, default: ChannelType.WORKSTATION })
  name?: ChannelType.CUSTOM;
}
