import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://94.158.50.204:40080',
      'http://localhost:3001',
      'http://localhost:3000',
    ],
    credentials: true,
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Prisma API')
    .setDescription('The Prisma API description')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
  console.log('Swagger http://94.158.50.204:40090/docs');
  console.log('Swagger http://localhost:3000/docs');

  console.log('Mufavvaqiyatli ishga tushdi');
  
}

bootstrap();
