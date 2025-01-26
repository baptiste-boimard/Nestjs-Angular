import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api')
export class AppController {
  constructor(
    @Inject('SERVICE_B') private readonly serviceB: ClientProxy,
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get('hello')
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  // @Get('external-data')
  // async getExternalData(): Promise<ExternalData> {
  //   const response = await lastValueFrom(
  //     this.httpService.get<ExternalData>('http://localhost:4000/data'),
  //   );
  //   return response.data;
  // }

  @Get('external-data/first')
  async getExternalData(): Promise<ExternalData> {
    const result: ExternalData = await lastValueFrom(
      this.serviceB.send({ cmd: 'first' }, {}),
    );
    return result;
  }

  @Get('external-data/second')
  async getExternalDataUp(): Promise<ExternalData[]> {
    const result: ExternalData[] = await lastValueFrom(
      this.serviceB.send({ cmd: 'second' }, {}),
    );
    return result;
  }
}

export interface ExternalData {
  id: number;
  title: string;
  description: string;
}
