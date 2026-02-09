import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(AppService)
  private readonly appService2: AppService;

  @Inject('Xin')
  private readonly xin: Record<string, any>;

  @Inject('Zhang')
  private readonly zhang: Record<string, any>;

  @Optional() // 声明为可选
  @Inject('xxx')
  private readonly xxx: Record<any, any>;

  @Get()
  getHello(): string {
    console.log(this.xin); // { name: 'xin' }
    console.log(this.zhang); // { username: 'zhang', age: 18 }
    console.log(this.xxx); // undefined
    return this.appService.getHello();
  }
}
