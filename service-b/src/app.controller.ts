/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DataService } from './app.service';
import { lastValueFrom } from 'rxjs';

@Controller('data')
export class AppController {
  constructor(private readonly dataService: DataService) {}
  @MessagePattern({ cmd: 'first' })
  async getData() {
    const result = await lastValueFrom(this.dataService.getData());
    return result;
  }

  @MessagePattern({ cmd: 'second' })
  async getDataUp() {
    const result = await lastValueFrom(this.dataService.getDataUp());
    return result;
  }
}

export interface ExternalData {
  id: number;
  title: string;
  description: string;
}
