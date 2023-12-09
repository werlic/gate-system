import { Member } from 'src/api/member/entities/member.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({
  name: 'orders'
})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  order_code: string;

  @Column({ type: 'varchar' })
  type?: string;

  @Column({ type: 'float', default: 0 })
  total: number;

  @Column({ type: 'json', nullable: true })
  detail?: any;

  @Column({ type: 'int' })
  member_id?: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
