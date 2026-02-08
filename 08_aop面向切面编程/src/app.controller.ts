import {
  Controller,
  Get,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

// @UseInterceptors(TimeInterceptor)
// @UsePipes(ValidatePipe)
// @UseFilters(TestFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(LoginGuard)
  // @UseInterceptors(TimeInterceptor)
  @Get()
  getHello(): string {
    console.log('handler执行');
    return this.appService.getHello();
  }

  // @UseFilters(TestFilter)
  @Get('test')
  test(@Query('num') num: number) {
    return num + '元';
  }
}
