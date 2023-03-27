/*eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AddTodoDto} from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { TodoStatusEnum } from "./enums/todos_status.enum";
import { TodoModel } from "../model/todo.model";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./entities/todo.entity";
import { Brackets, Like, Repository } from "typeorm";
import { ParamsDto } from "./dto/Params.dto";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}
  todos: TodoModel[]=[];
  @Inject('UUID') uuid:()=>number;
  getTodos(): TodoModel[] {
    return this.todos;
  }
  addTodo(addTodo: AddTodoDto): TodoModel {
    const newTodo = {
      id: this.uuid(),
      createdAt: new Date().toLocaleDateString(),
      status: TodoStatusEnum.waiting,
      ...addTodo,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
  getTodoById(id: number): TodoModel {
    const todo = this.todos.find(todo=>todo.id===id);
    if(todo)
      return todo;
    else {
      throw new NotFoundException(`Le todo d'id ${id} n'existe pas`);
    }


  }
  deleteTodo(id: number): TodoModel {
    const todoToDelete=this.getTodoById(id);
    const todoIndex=this.todos.findIndex(todo=>todo.id==id);
    this.todos.splice(todoIndex,1);
    return todoToDelete;
   }
    updateTodo(id:number, updateTodo:Partial<UpdateTodoDto>):TodoModel{
      const todoToUpdate=this.getTodoById(id)
      todoToUpdate.name=updateTodo.name?updateTodo.name:todoToUpdate.name;
      todoToUpdate.status=updateTodo.status?updateTodo.status:todoToUpdate.status;
      todoToUpdate.description=updateTodo.description?updateTodo.description:todoToUpdate.description;
      return todoToUpdate;
    }
    async addTodov2(todo:AddTodoDto):Promise<TodoEntity>{
    return await this.todoRepository.save(todo);
    }
   /* async updateTodov2(todo:Partial<UpdateTodoDto>,id:number):Promise<TodoEntity>{
      const newTodo = await this.todoRepository.preload({ id, ...todo });
      if (!newTodo) throw new NotFoundException;
      return await this.todoRepository.save(newTodo);
    }*/
  async updateTodov2(todo:Partial<UpdateTodoDto>,id:number):Promise<TodoEntity> {
    const todoToUpdate = await this.todoRepository.findOne({where: {id}});
    if (!todoToUpdate) throw new NotFoundException;

    todoToUpdate.name=todo.name?todo.name:todoToUpdate.name;
    todoToUpdate.description = todo.description?todo.description:todoToUpdate.description;
    todoToUpdate.status = todo.status?todo.status:todoToUpdate.status;

    return await this.todoRepository.save(todoToUpdate);

  }
  async deleteTodov2(id:number){

        return await this.todoRepository.delete(id);
    }
async softDelete(id:number){
    return await this.todoRepository.softDelete(id);
}
async restoreTodo(id:number){
    return await this.todoRepository.restore(id);
}
  async countByStatus() :Promise<string>{
    return "nombre de todos actifs : " + await this.todoRepository.countBy({ status:TodoStatusEnum.actif }) +
      "  nombre de todos waiting : " + await this.todoRepository.countBy({ status:TodoStatusEnum.waiting }) +
      " nombre de todos done : " + await this.todoRepository.countBy({ status:TodoStatusEnum.done })
  }
  async getTodosv2() {
    return await this.todoRepository.find();
  }
  async getTodosv3ByQueryParams(params:ParamsDto):Promise<TodoEntity[]>{
    const {criteria,status}=params;
    return await this.todoRepository.find({
        where: [
          {
            status: status,
          },
          {
            name: Like(`%${criteria}%`),
          },
          {
            description: Like(`%${criteria}%`),
          }
        ]
      });
    }


  async getTodoByIdv2(id:number):Promise<TodoEntity> {
    const todo=await this.todoRepository.findOne({where: {id}});
    if (!todo) {
      throw new NotFoundException(`Le todo avec l'id ${id} n'existe pas`);
    }
    return todo;
  }
  async getTodosv4ByQueryParams(params:ParamsDto):Promise<TodoEntity[]>{
      const {status,criteria}=params;
      const queryBuilder = this.todoRepository.createQueryBuilder("todos");
    queryBuilder.where(new Brackets(qb => {
      qb.where('todos.name LIKE :criteria OR todos.description LIKE :criteria', { criteria: `%${criteria}%` });
    })).andWhere('todos.status = :status', {status: status })
      if (!queryBuilder.getMany()) throw new NotFoundException();
    return await queryBuilder.getMany();
  }


async getTodosv5ByPagination (page: number, limit : number ): Promise<TodoEntity[]> {
    const skip = (page - 1) * limit;
    const todos = await this.todoRepository.find({
      skip,
      take: limit,
    });
    return todos ;
  }

}
