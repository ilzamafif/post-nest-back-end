import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page/page.service';
import { Repository } from 'typeorm';
import { CreateKonsumanDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';
import { Konsuman } from './entities/konsuman.entity';

@Injectable()
export class KonsumenService extends PageService {
  constructor(
    @InjectRepository(Konsuman) private Konsumenrepo: Repository<Konsuman>
  ) { super() }

  create(createKonsumanDto: CreateKonsumanDto) {
    return this.Konsumenrepo.save(createKonsumanDto);;
  }

  findAll(filter) {
    return this.generatePage(filter, this.Konsumenrepo, { relations: ['user'] })
  }

  findOne(id: number) {
    return this.Konsumenrepo.findOne(id);
  }

  update(id: number, updateKonsumanDto: UpdateKonsumanDto) {
    return this.Konsumenrepo.save(updateKonsumanDto);
  }

  async remove(id: number) {
    let produk = await this.Konsumenrepo.findOne(id)
    return this.Konsumenrepo.remove(produk);
  }
}
