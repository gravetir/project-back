import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = parseInt(process.env.PORT);
  const server = process.env.SERVER;
  await app.listen(port, server);

  console.log(app.getUrl());
}
bootstrap();
