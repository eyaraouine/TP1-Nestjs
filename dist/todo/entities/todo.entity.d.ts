import { TodoStatusEnum } from "../enums/todos_status.enum";
import { TimeStamp } from "../../dates/time-stamp";
export declare class TodoEntity extends TimeStamp {
    id: number;
    name: string;
    description: string;
    status: TodoStatusEnum;
}
