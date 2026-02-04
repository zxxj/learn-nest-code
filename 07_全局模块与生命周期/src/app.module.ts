import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AnimalModule } from './animal/animal.module';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [PersonModule, AnimalModule, CatModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
