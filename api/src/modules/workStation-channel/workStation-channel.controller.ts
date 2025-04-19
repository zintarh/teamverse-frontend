import { CreateWorkStationChannelDto } from './dto/create-workStation-channel.dto';
import { WorkstationChannelService } from './workStation-channel.service';

export class WorkstationChannelController {
  constructor(
    private readonly workstationChannelService: WorkstationChannelService,
  ) {}

  async createWorkStation(
    createWorkStationChannelDto: CreateWorkStationChannelDto,
  ) {
    return this.workstationChannelService.createWorkStation(
      createWorkStationChannelDto,
    );
  }

  async findAll() {
    return this.workstationChannelService.findAllWorkStationChannels();
  }

  async findOne(id: number) {
    return this.workstationChannelService.findOneWorkStationChannel(id);
  }
}
