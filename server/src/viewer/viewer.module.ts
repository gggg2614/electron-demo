import { Module } from '@nestjs/common';
import { ViewerService } from './viewer.service';
import { ViewerController } from './viewer.controller';
import {HttpModule} from '@nestjs/axios'


@Module({
  imports: [HttpModule],
  controllers: [ViewerController],
  providers: [ViewerService]
})
export class ViewerModule {}
