import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PersonService } from 'src/person/person.service';

@Injectable()
export class AnimalService {
  constructor(private readonly personService: PersonService) {}

  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new animal';
  }

  findAll() {
    console.log(this.personService); // PersonService{}
    return `${this.personService.findAll()}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
