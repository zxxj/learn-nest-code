import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('cat service onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('cat service onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('cat service onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('cat service beforeApplicationShutdown signal:', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('cat service onApplicationShutdown signal:', signal);
  }

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
