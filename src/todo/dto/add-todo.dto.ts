/*eslint-disable prettier/prettier */

import { lengthErrorMessage } from "../../error-messages";

import {MinLength, Length ,IsNotEmpty} from 'class-validator';

export class AddTodoDto{
@IsNotEmpty()
@Length(3,10,{message:lengthErrorMessage('name',3,10)})
  name: string;
  @IsNotEmpty()
  @MinLength(10, { message: lengthErrorMessage('description', 10) })
  description: string;

}