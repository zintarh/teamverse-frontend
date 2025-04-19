import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { ChannelType } from 'src/common/enums/channels.enum';

export class CreateWeekendChannelDto {
  @IsInt()
  teamId: number;

  @IsNotEmpty()
  @IsEnum({ enum: ChannelType, default: ChannelType.WEEKEND })
  name?: ChannelType;
}
