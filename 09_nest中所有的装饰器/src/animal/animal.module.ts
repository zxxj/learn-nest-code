import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { PersonModule } from 'src/person/person.module';
import { PersonService } from 'src/person/person.service';

@Module({
  // imports: [PersonModule],
  controllers: [AnimalController],
  providers: [AnimalService],
  // providers: [AnimalService, PersonService],
})
export class AnimalModule {}
