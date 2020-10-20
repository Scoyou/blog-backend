import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init({
    dsn: "https://51206585622d436585b5706930964b3d@o451084.ingest.sentry.io/5473914",
  });
  await app.listen(5000);
}
bootstrap();
