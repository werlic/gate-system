import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'members'
})
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  code: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
    default: null
  })
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
