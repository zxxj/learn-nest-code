import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('全局中间件在访问handler前执行了:', req.url);
    next();
    console.log('全局中间件在访问handler后执行了');
  });

  // 全局守卫
  // app.useGlobalGuards(new LoginGuard());

  // 全局拦截器
  app.useGlobalInterceptors(new TimeInterceptor());

  // 全局管道
  app.useGlobalPipes(new ValidatePipe());

  // 全局异常处理
  app.useGlobalFilters(new TestFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
