import { GithubService } from 'src/service/github.service';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EnvHelper } from 'src/helper/env.helper';

@Injectable()
export class UpdateReadme {
  private readonly logger = new Logger(UpdateReadme.name);

  constructor(private readonly githubService: GithubService, private env: EnvHelper) {}

  @Cron(CronExpression.EVERY_2_HOURS)
  async handleCron() {
    let all = await this.githubService.getAllPublicReposByUsername('jabibamman');
    let numberOfRepos = all.length;
    this.logger.verbose(`${numberOfRepos} repos found`);

    await this.updateReadme(numberOfRepos);
  }

    async updateReadme(numberOfRepos: number) {
        const readmeResponse = await this.githubService.getFileContents(this.env.githubUsername, this.env.githubUsername, 'README.md');
        const readme = Buffer.from(readmeResponse.content, 'base64').toString('utf8');
        const text = `I'm the maintainer of more than ${numberOfRepos}`;
        const regex = /I'm the maintainer of more than \d+/;
        
        if (RegExp(/\d+/).exec(RegExp(regex).exec(readme)[0])[0] === numberOfRepos.toString()) {
            this.logger.verbose('Number of repos is the same as the one in the readme');
            return;
        }
        let newReadme = readme.replace(regex, text);
        await this.githubService.updateFile(this.env.githubUsername, this.env.githubUsername, 'README.md', '🤖 Automatically updated the number of repos', newReadme, readmeResponse.sha);
    }
}
