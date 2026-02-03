import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'app_service_xin',
      useClass: AppService,
    },

    {
      provide: 'person',
      useValue: {
        name: 'xin',
        age: 18,
      },
    },

    {
      provide: 'animal',
      useFactory() {
        return {
          name: 'monkey',
          age: 3,
        };
      },
    },

    {
      provide: 'student',
      useFactory(
        person: { name: string },
        animal: { age: number },
        appService: AppService,
      ) {
        return {
          name: person.name,
          age: animal.age,
          appService: appService,
        };
      },
      inject: ['person', 'animal', AppService],
    },

    {
      provide: 'dog',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });

        return {
          name: 'xin',
          age: 18,
        };
      },
    },
  ],
})
export class AppModule {}
