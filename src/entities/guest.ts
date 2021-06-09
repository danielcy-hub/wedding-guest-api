import { Column, Entity, Index, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Attendance } from './attendance';

@Index('_guest_id_index', ['id'], { unique: true })
@Entity('guest', { schema: 'public' })
export class Guest {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 1000 })
  name: string;

  @Column('character varying', { name: 'address', length: 10000 })
  address: string;

  @Column('character', { name: 'guest_of', length: 1 })
  guest_of: string;

  @Column('smallint', { name: 'person_qty' })
  person_qty: number;

  @OneToOne(()=>Attendance,(attendance)=>attendance.guest)
  attendance:Attendance;
}
