import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page/page.service';
import { Repository } from 'typeorm';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProdukService extends PageService {
  constructor(
    @InjectRepository(Produk) private ProdukRepo: Repository<Produk>
  ) {
    super()
  }
  create(createProdukDto: CreateProdukDto) {
    return this.ProdukRepo.save(createProdukDto);
  }

  findAll(filter) {
    return this.generatePage(filter, this.ProdukRepo, { relations: ['user'] })
    // return this.produkRepo.find({relations:['user']});
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
