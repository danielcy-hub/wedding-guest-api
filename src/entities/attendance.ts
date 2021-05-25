import { Column, Entity, Index } from 'typeorm';

@Index('_attendance_id_index', ['id'], { unique: true })
@Entity('guest', { schema: 'public' })
export class Attendance {
  
}