import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}
