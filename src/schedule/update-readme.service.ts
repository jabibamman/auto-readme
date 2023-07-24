import { GithubService } from 'src/service/github.service';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';

@Injectable()
export class UpdateReadme {
  private readonly logger = new Logger(UpdateReadme.name);

  constructor(private readonly githubService: GithubService) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    this.logger.debug('Called every 30 minutes');
    let all = await this.githubService.getAllPublicReposByUsername('jabibamman');
    let numberOfRepos = all.length;
    this.logger.debug(`${numberOfRepos} repos found`);

  }
}
