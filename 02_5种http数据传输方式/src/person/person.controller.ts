import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

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

  @Post('file')

  // 使用UseInterceptors装饰器启用AnyFilesInterceptor拦截器
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/', // 指定上传的文件保存在哪个目录,在此指定目录名字,没有则会自动新建目录.
    }),
  )

  // 通过UploadedFiles装饰器来取出文件参数, 普通的参数还是通过Body装饰器取出.
  testFormData(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `createPersonDto: ${JSON.stringify(createPersonDto)}`;
  }
}
