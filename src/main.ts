import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 6000

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  

  app.enableCors() // CONNECT TO API
  // app.enableCors({
  //   origin: 'http://localhost:3005', // React app running on port 3000
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204
  // });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log("Listen on port " + port)
  });
}
bootstrap();
