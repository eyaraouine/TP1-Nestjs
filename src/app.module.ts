/*eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import * as process from "process";
import { TodoEntity } from "./todo/entities/todo.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [TodoModule, CommonModule,ConfigModule.forRoot({
    isGlobal:true,
  }),
    TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [TodoEntity],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
