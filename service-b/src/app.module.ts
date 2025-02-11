import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, DataService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule {}
