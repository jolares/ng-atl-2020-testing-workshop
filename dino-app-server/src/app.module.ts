import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DinosoursController } from './dinosours/dinosours.controller';

@Module({
  imports: [],
  controllers: [AppController, DinosoursController],
  providers: [AppService],
})
export class AppModule {}
