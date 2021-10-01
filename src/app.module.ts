import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ExistValidator } from './etc/validator/exist-validator';
import { UniqueValidator } from './etc/validator/unique-validator';
import { AuthModule } from './auth/auth.module';
import { ProdukModule } from './produk/produk.module';
import { Produk } from './produk/entities/produk.entity';
import { KonsumenModule } from './konsumen/konsumen.module';
import { Konsuman } from './konsumen/entities/konsuman.entity';
import { RekeningModule } from './rekening/rekening.module';
import { Rekening } from './rekening/entities/rekening.entity';
import { PenjualanItem } from './penjualan/entities/penjualan-item.entity';
import { Penjualan } from './penjualan/entities/penjualan.entity';
import { PenjualanBayar } from './penjualan/entities/penjualan-bayar.entity';
import { PenjualanModule } from './penjualan/penjualan.module';
import { PageService } from './etc/service/page/page.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      entities: [
        User,
        Produk, // mendeklarasikan produk entity ke app.module
        Konsuman, // mendeklarasikan konsumen entity ke app.module
        Konsuman, // mendeklarasikan konsumen entity ke app.module
        Rekening, // mendeklarasikan rekening entity ke app.module
        Penjualan,
        PenjualanItem,
        PenjualanBayar,
      ],
      synchronize: true
    }),
    UserModule,
    AuthModule,
    ProdukModule,
    KonsumenModule,
    RekeningModule,
    Penjualan,
    PenjualanBayar,
    PenjualanItem,
    PenjualanModule
  ],
  controllers: [AppController],
  providers: [AppService, ExistValidator, UniqueValidator, PageService],
})
export class AppModule { }
