import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('info')
  testQuery(@Query('username') username: string, @Query('age') age: number) {
    return `username:${username}, age:${age}`;
  }

  @Get(':id')
  testParam(@Param('id') id: number) {
    return `param: ${id}`;
  }

  @Post()
  testFormUrlEncoded(@Body() createPersonDto: CreatePersonDto) {
    return `createPersonDto: ${JSON.stringify(createPersonDto)}`;
  }

  @Post('create')
  testJson(@Body() createpersonDto: CreatePersonDto) {
    return `createPersonDto:${JSON.stringify(createpersonDto)}`;
  }
}
