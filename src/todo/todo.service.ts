/*eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { TodoEntity } from "./entities/todo.entity";
import { AddTodoDto} from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { TodoStatusEnum } from "./enums/todos_status.enum";

@Injectable()
export class TodoService {
  todos: TodoEntity[]=[];
  @Inject('UUID') uuid:()=>number;
  getTodos(): TodoEntity[] {
    return this.todos;
  }
  addTodo(addTodo: AddTodoDto): TodoEntity {
    const newTodo = {
      id: this.uuid(),
      createdAt: new Date(),
      status: TodoStatusEnum.waiting,
      ...addTodo,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
  getTodoById(id: number): TodoEntity {
    const todo = this.todos.find(todo=>todo.id===id);
    if(todo)
      return todo;
    else {
      throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
    }
  }
  deleteTodo(id: number): TodoEntity {
    const todoToDelete = this.getTodoById(id);
      this.todos.filter(todo => todo.id !== id);
      return todoToDelete;
   }
    updateTodo(id:number, updateTodo:Partial<UpdateTodoDto>):TodoEntity{
      const todoToUpdate=this.getTodoById(id)
      todoToUpdate.name=updateTodo.name?updateTodo.name:todoToUpdate.name;
      todoToUpdate.status=updateTodo.status?updateTodo.status:todoToUpdate.status;
      todoToUpdate.description=updateTodo.description?updateTodo.description:todoToUpdate.description;
      return todoToUpdate;
    }
}
