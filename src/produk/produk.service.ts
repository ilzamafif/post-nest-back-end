import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProdukService {
  constructor(
    @InjectRepository(Produk) private ProdukRepo: Repository<Produk>
  ) { }
  create(createProdukDto: CreateProdukDto) {
    return this.ProdukRepo.save(createProdukDto);
  }

  findAll() {
    return this.ProdukRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.ProdukRepo.findOne(id);
  }

  update(id: number, updateProdukDto: UpdateProdukDto) {
    updateProdukDto.id = id;
    return this.ProdukRepo.save(updateProdukDto);
  }

  async remove(id: number) {
    let produk = await this.ProdukRepo.findOne(id)
    return this.ProdukRepo.remove(produk);
  }
}
