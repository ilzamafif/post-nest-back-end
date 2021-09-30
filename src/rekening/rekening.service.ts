import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRekeningDto } from './dto/create-rekening.dto';
import { UpdateRekeningDto } from './dto/update-rekening.dto';
import { Rekening } from './entities/rekening.entity';

@Injectable()
export class RekeningService {
  constructor(
    @InjectRepository(Rekening) private RekeningRepo: Repository<Rekening>
  ) { }
  create(createRekeningDto: CreateRekeningDto) {
    return this.RekeningRepo.save(createRekeningDto);
  }

  findAll() {
    return this.RekeningRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.RekeningRepo.findOne(id);
  }

  update(id: number, updateRekeningDto: UpdateRekeningDto) {
    updateRekeningDto.id = id;
    return this.RekeningRepo.save(updateRekeningDto);
  }

  async remove(id: number) {
    let rekening = await this.RekeningRepo.findOne(id)
    return this.RekeningRepo.remove(rekening);
  }
}
