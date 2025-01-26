import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000,
    },
  });

  // // Activer le CORS
  // app.enableCors({
  //   origin: '*', // Remplacez par l'origine de votre frontend
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, // Si vous envoyez des cookies ou des identifiants
  // });

  // await app.listen(process.env.PORT ?? 4000);
  await app.listen();
}
bootstrap();
