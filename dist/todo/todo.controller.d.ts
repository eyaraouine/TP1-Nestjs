import { TodoEntity } from "./entities/todo.entity";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { AddTodoDto } from "./dto/add-todo.dto";
import { TodoService } from "./todo.service";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getTodos(): TodoEntity[];
    addTodo(addTodo: AddTodoDto): TodoEntity;
    deleteTodo(id: any): TodoEntity;
    updateTodo(updateTodo: Partial<UpdateTodoDto>, id: any): TodoEntity;
    getTodo(id: any): TodoEntity;
}
