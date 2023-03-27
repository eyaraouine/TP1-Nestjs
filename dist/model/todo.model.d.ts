import { TodoStatusEnum } from "../todo/enums/todos_status.enum";
export declare class TodoModel {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    status: TodoStatusEnum;
}
