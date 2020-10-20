import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UseInterceptors } from '@nestjs/common';
import { SentryInterceptor } from './sentry.interceptor';

@UseInterceptors(SentryInterceptor)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
