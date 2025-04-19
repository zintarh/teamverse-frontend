import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ChannelType } from 'src/common/enums/channels.enum';

export class CreatePlaylistChannelDto {
  @IsInt()
  teamId?: number;

  @IsNotEmpty()
  @IsEnum({ enum: ChannelType, default: ChannelType.PLAYLIST })
  name?: ChannelType;
}
