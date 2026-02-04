import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';

@Module({
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('dog module onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('dog module onApplicationBootstrap');
  }
}
