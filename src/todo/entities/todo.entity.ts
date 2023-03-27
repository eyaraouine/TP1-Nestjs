/*eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todos_status.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStamp } from "../../dates/time-stamp";

@Entity('todos')
export class TodoEntity extends TimeStamp{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ type: 'enum', enum: TodoStatusEnum,default:"En attente" })
  status:TodoStatusEnum;



}