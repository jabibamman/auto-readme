import { Module } from '@nestjs/common';
import { GithubModule } from './module/github.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ScheduleModule.forRoot(), ConfigModule.forRoot(), GithubModule]
})
export class AppModule {}
