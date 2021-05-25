import { Column, Entity, Index, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Guest } from './guest';

@Index('_attendance_id_index', ['id'], { unique: true })
@Entity('attendance', { schema: 'public' })
export class Attendance {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('smallint',{name:'guest_id'})
  guest_id: number;
  
  @Column('boolean',{name:'gift'})
  gift: boolean;

  @Column('int',{name:'gift_ammount'})
  gift_ammount: number;

  @CreateDateColumn({type:'timestamp with time zone', name:'time_arrive'})
  time_arrive: Date;

  @Column('smallint',{name:"person_qty"})
  person_qty: number;

  @OneToOne(()=>Guest,(guest)=>guest.attendance,{onDelete:'CASCADE'})
  @JoinColumn([{name:'guest_id', referencedColumnName:'id'}])
  guest: Guest;
}