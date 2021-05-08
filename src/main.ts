import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { AllExceptionsFilter } from './exception/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api/v0');
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  setupSwagger(app);
  await app.listen(configService.get('environment').port);
  Logger.log(`Listening on port: ${configService.get('environment').port}`);
}
bootstrap();
