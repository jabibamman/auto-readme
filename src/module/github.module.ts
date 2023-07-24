import { Module } from '@nestjs/common';
import { GithubService } from 'src/service/github.service';
import { UpdateReadme } from 'src/schedule/update-readme.service';
import { HttpModule } from '@nestjs/axios';
import { EnvHelper } from 'src/helper/env.helper';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [HttpModule, ConfigModule],
    providers: [GithubService, UpdateReadme, EnvHelper],
    exports: [GithubService, UpdateReadme],
})
export class GithubModule {}