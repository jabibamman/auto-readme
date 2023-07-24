import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './module/github.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ScheduleModule.forRoot(), ConfigModule.forRoot(), GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
