import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dog')
export class DogController implements OnModuleInit, OnApplicationBootstrap {
  constructor(private readonly dogService: DogService) {}

  onModuleInit() {
    console.log('dog controller onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('dog controller onApplicationBootstrap');
  }

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogService.remove(+id);
  }
}
