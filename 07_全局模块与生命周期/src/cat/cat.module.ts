import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('cat module onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('cat module onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('cat module onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('cat module beforeApplicationShutdown signal:', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('cat module onApplicationShutdown signal:', signal);
  }
}
