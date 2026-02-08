import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AnimalModule } from './animal/animal.module';
import { LogMiddleware } from './log.middleware';
import { PersonController } from './person/person.controller';

@Module({
  imports: [PersonModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LogMiddleware).forRoutes('person/*path'); // 指定LogMiddleware这个中间件在哪个路由中生效.
    consumer.apply(LogMiddleware).forRoutes(PersonController); // 也可以直接传入对应路由的Controller
  }
}
