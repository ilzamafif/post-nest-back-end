import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Produk } from "src/produk/entities/produk.entity"; // import produk

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nama_user: string

  @Column()
  email: string

  @Column()
  username: string

  @Column()
  password: string

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  update_up: Date

  @OneToMany(() => Produk, prod => prod.id) // relasi ke produk
  produk: Produk
}
