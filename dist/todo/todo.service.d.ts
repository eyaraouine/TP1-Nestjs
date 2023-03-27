import { AddTodoDto } from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { TodoModel } from "../model/todo.model";
import { TodoEntity } from "./entities/todo.entity";
import { Repository } from "typeorm";
import { ParamsDto } from "./dto/Params.dto";
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<TodoEntity>);
    todos: TodoModel[];
    uuid: () => number;
    getTodos(): TodoModel[];
    addTodo(addTodo: AddTodoDto): TodoModel;
    getTodoById(id: number): TodoModel;
    deleteTodo(id: number): TodoModel;
    updateTodo(id: number, updateTodo: Partial<UpdateTodoDto>): TodoModel;
    addTodov2(todo: AddTodoDto): Promise<TodoEntity>;
    updateTodov2(todo: Partial<UpdateTodoDto>, id: number): Promise<TodoEntity>;
    deleteTodov2(id: number): Promise<import("typeorm").DeleteResult>;
    softDelete(id: number): Promise<import("typeorm").UpdateResult>;
    restoreTodo(id: number): Promise<import("typeorm").UpdateResult>;
    countByStatus(): Promise<string>;
    getTodosv2(): Promise<TodoEntity[]>;
    getTodosv3ByQueryParams(params: ParamsDto): Promise<TodoEntity[]>;
    getTodoByIdv2(id: number): Promise<TodoEntity>;
    getTodosv4ByQueryParams(params: ParamsDto): Promise<TodoEntity[]>;
    getTodosv5ByPagination(page: number, limit: number): Promise<TodoEntity[]>;
}
