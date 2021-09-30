import { Module } from '@nestjs/common';
import { RekeningService } from './rekening.service';
import { RekeningController } from './rekening.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rekening } from './entities/rekening.entity';

@Module({
  imports: [ // registrsikin entiti rekening ke module
    TypeOrmModule.forFeature([Rekening])
  ],
  controllers: [RekeningController],
  providers: [RekeningService]
})
export class RekeningModule { }
