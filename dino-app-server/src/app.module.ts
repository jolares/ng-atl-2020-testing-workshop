import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DinosaursController } from './dinosours/dinosours.controller';

@Module({
  imports: [],
  controllers: [AppController, DinosaursController],
  providers: [AppService],
})
export class AppModule {}
