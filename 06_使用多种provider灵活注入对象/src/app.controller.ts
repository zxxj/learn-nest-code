import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 使用构造器注入
  constructor(
    @Inject('app_service_xin') private readonly appService: AppService,

    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('animal') private readonly animal: { name: string; age: number },

    @Inject('student')
    private readonly student: {
      name: string;
      age: number;
      appService: AppService;
    },

    @Inject('dog')
    private readonly dog: { name: string; age: number },
  ) {}

  // 使用属性的方式注入
  @Inject('app_service_xin')
  private readonly appService2: AppService;

  @Get()
  getHello(): string {
    console.log(this.appService);
    console.log(this.appService2);

    console.log(this.person); // { name: 'xin', age: 18}
    console.log(this.animal); // { name: 'monkey', age: 3}
    console.log(this.student); // { name: 'xin', age: 3, appService: AppService {} }

    console.log('dog', this.dog);
    return this.appService.getHello();
  }
}
