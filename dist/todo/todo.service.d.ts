import { TodoEntity } from "./entities/todo.entity";
import { AddTodoDto } from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
export declare class TodoService {
    todos: TodoEntity[];
    uuid: () => number;
    getTodos(): TodoEntity[];
    addTodo(addTodo: AddTodoDto): TodoEntity;
    getTodoById(id: number): TodoEntity;
    deleteTodo(id: number): TodoEntity;
    updateTodo(id: number, updateTodo: Partial<UpdateTodoDto>): TodoEntity;
}
