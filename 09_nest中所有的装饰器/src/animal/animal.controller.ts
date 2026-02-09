import { Controller, Get } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { PersonService } from 'src/person/person.service';

@Controller('animal')
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService,
    private readonly personService: PersonService,
  ) {}

  @Get()
  findAll() {
    console.log(this.personService);
    return this.animalService.findAll();
  }
}
