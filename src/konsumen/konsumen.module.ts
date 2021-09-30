import { Module } from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { KonsumenController } from './konsumen.controller';
import { Konsuman } from './entities/konsuman.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ // import 
    TypeOrmModule.forFeature([Konsuman]),
  ],
  controllers: [KonsumenController],
  providers: [KonsumenService]
})
export class KonsumenModule { }
