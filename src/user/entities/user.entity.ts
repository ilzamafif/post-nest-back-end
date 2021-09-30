import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Produk } from "src/produk/entities/produk.entity"; // import produk
import { Konsuman } from "src/konsumen/entities/konsuman.entity";
import { Rekening } from "src/rekening/entities/rekening.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nama_user: string

  @Column({ unique: true })
  email: string

  @Column()
  username: string

  @Column({ select: false })
  password: string

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  update_up: Date

  @OneToMany(() => Produk, prod => prod.id) // relasi ke produk
  produk: Produk

  @OneToMany(() => Konsuman, kons => kons.id) // relasi ke konsumen
  Konsuman: Konsuman

  @OneToMany(() => Rekening, rek => rek.id) // relasi ke rekening
  Rekening: Rekening
}
