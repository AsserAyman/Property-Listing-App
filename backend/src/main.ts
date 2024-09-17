import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MainSeeder } from './seeders/main.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Allow validation
  app.useGlobalPipes(new ValidationPipe());

  //Allow cors for frontend connection
  app.enableCors();

  //Set global prefix to access the backend through api/
  app.setGlobalPrefix('api');

  //Setup swagger
  const config = new DocumentBuilder()
    .setTitle('Property Listing API')
    .setDescription('The Property Listing API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Run the seeder
  const mainSeeder = app.get(MainSeeder);
  await mainSeeder.seed();

  await app.listen(8000);
}
bootstrap();
