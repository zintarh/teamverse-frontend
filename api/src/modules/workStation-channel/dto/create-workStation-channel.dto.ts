import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { ChannelType } from 'src/common/enums/channels.enum';

export class CreateWorkStationChannelDto {
  @IsInt()
  teamId: number;

  @IsNotEmpty()
  @IsEnum({ enum: ChannelType, default: ChannelType.WORKSTATION })
  name?: ChannelType;
}
