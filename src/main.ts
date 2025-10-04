import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { corsOptions } from './config/cors/cors.config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('the-Ace-Clothing API')
    .setDescription('API 文件')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, documentFactory);

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
