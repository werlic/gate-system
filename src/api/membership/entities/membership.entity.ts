import { Member } from 'src/api/member/entities/member.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({
  name: 'membership'
})
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({ type: 'timestamp' })
  start_date?: Date;

  @Column({ type: 'timestamp' })
  end_date?: Date;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @Column({ type: 'int' })
  member_id?: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Member)
  @JoinColumn({ name: "member_id" })
  member: Member
}
