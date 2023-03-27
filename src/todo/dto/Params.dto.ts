/*eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todos_status.enum";
import { IsIn, IsString } from "class-validator";

export class ParamsDto{
  @IsString()
  criteria?:string;
  @IsIn([TodoStatusEnum.waiting,TodoStatusEnum.done,TodoStatusEnum.actif])
  status?:TodoStatusEnum;
}