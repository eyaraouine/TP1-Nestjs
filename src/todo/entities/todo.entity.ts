/*eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todos_status.enum";

export class TodoEntity {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  status: TodoStatusEnum;
}