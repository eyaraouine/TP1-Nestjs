import { TodoStatusEnum } from "../enums/todos_status.enum";
export declare class TodoEntity {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    status: TodoStatusEnum;
}
