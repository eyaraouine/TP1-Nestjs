/*eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todos_status.enum";
import { lengthErrorMessage } from "../../error-messages";
import {MinLength, Length ,IsOptional,IsIn} from 'class-validator';

export class UpdateTodoDto{
  @IsOptional()
  @Length(3,10,{message:lengthErrorMessage('name',3,10)})
  name: string;
  @MinLength(10, { message: lengthErrorMessage('description', 10) })
  @IsOptional()
  description: string;
  @IsIn([TodoStatusEnum.waiting,TodoStatusEnum.done,TodoStatusEnum.actif])
  @IsOptional()
  status: TodoStatusEnum;
}