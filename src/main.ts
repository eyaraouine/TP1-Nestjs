/*eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as process from "process";
import { VersioningType } from "@nestjs/common";
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  });
  await app.listen(process.env.APP_PORT);
}
bootstrap();
