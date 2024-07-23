import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle(`${process.env.APP_NAME}-v${process.env.APP_VERSION}`)
    .setDescription(`${process.env.APP_DESCRIPTION}`)
    .setVersion(`${process.env.APP_VERSION}`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.APPLICATION_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
