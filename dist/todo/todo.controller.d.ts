import { TodoEntity } from "./entities/todo.entity";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { AddTodoDto } from "./dto/add-todo.dto";
import { TodoService } from "./todo.service";
import { TodoModel } from "../model/todo.model";
import { TodoStatusEnum } from "./enums/todos_status.enum";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getTodos(): TodoModel[];
    addTodo(addTodo: AddTodoDto): TodoModel;
    deleteTodo(id: any): TodoModel;
    updateTodo(updateTodo: Partial<UpdateTodoDto>, id: any): TodoModel;
    getTodo(id: any): TodoModel;
    addTodov2(todo: AddTodoDto): Promise<TodoEntity>;
    updateTodov2(todo: Partial<UpdateTodoDto>, id: number): Promise<TodoEntity>;
    deleteTodov2(id: number): Promise<import("typeorm").DeleteResult>;
    softdelete(id: number): Promise<import("typeorm").UpdateResult>;
    restoreTodo(id: number): Promise<import("typeorm").UpdateResult>;
    getTodosv2(): Promise<TodoEntity[]>;
    getTodosv3ByQueryParams(criteria: string, status: TodoStatusEnum): Promise<TodoEntity[]>;
    getTodoByIdv2(id: number): Promise<TodoEntity>;
    getTodosv4ByQueryParams(status: TodoStatusEnum, criteria: string): Promise<TodoEntity[]>;
    countByStatus(): Promise<string>;
    getTodosv5ByPagination(page?: number, limit?: number): Promise<TodoEntity[]>;
}
