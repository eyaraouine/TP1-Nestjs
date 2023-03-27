/*eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Version } from "@nestjs/common";
import { TodoEntity } from "./entities/todo.entity";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { AddTodoDto } from "./dto/add-todo.dto";
import { TodoService } from "./todo.service";
import { TodoModel } from "../model/todo.model";
import { TodoStatusEnum } from "./enums/todos_status.enum";
import { ParamsDto } from "./dto/Params.dto";


@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {
  }
  @Get()
  getTodos(): TodoModel[] {
    return this.todoService.getTodos();
  }
 @Post()
  addTodo(@Body()addTodo: AddTodoDto): TodoModel{
    return this.todoService.addTodo(addTodo)

 }
 @Delete(':id')
 deleteTodo(@Param('id') id):TodoModel{
   return this.todoService.deleteTodo(id);
 }
  @Put("/:id")
  updateTodo(@Body() updateTodo: Partial<UpdateTodoDto>, @Param("id") id): TodoModel {
    return this.todoService.updateTodo(id,updateTodo);
  }
  @Get(':id')
  getTodo(@Param('id') id): TodoModel{
    return this.todoService.getTodoById(id);
  }
  @Post()
  @Version('2')
  async addTodov2(@Body() todo:AddTodoDto):Promise<TodoEntity>{
    return this.todoService.addTodov2(todo);
  }
  @Put('/:id')
  @Version('2')
  async updateTodov2(@Body() todo:Partial<UpdateTodoDto>,@Param('id')id:number):Promise<TodoEntity>{
    return this.todoService.updateTodov2(todo,id);

  }
  @Delete(':id')
  @Version('2')
  async deleteTodov2(@Param('id') id:number){

   return this.todoService.deleteTodov2(id);
  }
  @Delete(':id')
  @Version('3')
  async softdelete(@Param('id') id: number) {
    return this.todoService.softDelete(id);
}
  @Get('/restore/:id')
async restoreTodo(@Param('id') id:number){
  return this.todoService.restoreTodo(id);
  }
  @Get()
  @Version('2')
  async getTodosv2(){
    return this.todoService.getTodosv2();
  }

  @Get()
  @Version('3')
  async getTodosv3ByQueryParams(@Query('criteria') criteria:string,@Query('status') status:TodoStatusEnum):Promise<TodoEntity[]>{
    const params:ParamsDto={criteria,status};
    return this.todoService.getTodosv3ByQueryParams(params);
  }
  @Get(':id')
  @Version('2')
  async getTodoByIdv2(@Param('id') id:number):Promise<TodoEntity>{
    return this.todoService.getTodoByIdv2(id);
  }
  @Get()
  @Version('4')
  async getTodosv4ByQueryParams(@Query('status') status:TodoStatusEnum,@Query('criteria') criteria:string): Promise<TodoEntity[]> {
    const params:ParamsDto={criteria,status};
    return this.todoService.getTodosv4ByQueryParams(params);
  }
  @Get('/count/bystatus')
  async countByStatus():Promise<string>{
    return this.todoService.countByStatus();
  }
  @Get()
  @Version('5')
  async getTodosv5ByPagination(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
  return this.todoService.getTodosv5ByPagination(page,limit);
  }

}