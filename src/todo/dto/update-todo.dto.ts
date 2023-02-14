/*eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todos_status.enum";

export class UpdateTodoDto{
  name: string;
  description: string;
  status: TodoStatusEnum;
}