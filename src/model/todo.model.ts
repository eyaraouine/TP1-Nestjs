/*eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../todo/enums/todos_status.enum";
export class TodoModel{
  id: number ;
  name:string;
  description:string;
  createdAt: string ;
  status: TodoStatusEnum ;
}