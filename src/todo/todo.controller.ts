/*eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { TodoEntity } from "./entities/todo.entity";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { AddTodoDto } from "./dto/add-todo.dto";
import { TodoService } from "./todo.service";


@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {
  }
  @Get()
  getTodos(): TodoEntity[] {
    return this.todoService.getTodos();
  }
 @Post()
  addTodo(@Body()addTodo: AddTodoDto): TodoEntity {
    return this.todoService.addTodo(addTodo)

 }
 @Delete(':id')
 deleteTodo(@Param('id') id):TodoEntity{
   return this.todoService.deleteTodo(id);
 }
  @Put(":id")
  updateTodo(@Body() updateTodo: Partial<UpdateTodoDto>, @Param("id") id): TodoEntity {
    return this.todoService.updateTodo(id,updateTodo);
  }
  @Get(':id')
  getTodo(@Param('id') id): TodoEntity {
    return this.todoService.getTodoById(id);
  }
}