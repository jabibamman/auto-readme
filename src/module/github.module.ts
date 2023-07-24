import { Module } from '@nestjs/common';
import { GithubService } from 'src/service/github.service';
import { UpdateReadme } from 'src/schedule/update-readme.service';

@Module({
    providers: [GithubService, UpdateReadme],
    exports: [GithubService, UpdateReadme],
})
export class GithubModule {}
