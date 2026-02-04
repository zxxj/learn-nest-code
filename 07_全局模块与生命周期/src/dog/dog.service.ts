import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogService implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('dog service onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('dog service onApplicationBootstrap');
  }

  create(createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
