import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { EnvHelper } from 'src/helper/env.helper';

@Injectable()
export class GithubService {
  constructor(private http: HttpService, private env: EnvHelper) {}

  async getAllPublicReposByUsername(username: string) {
    const result = await this.http.get(`https://api.github.com/users/${username}/repos`, {
      headers: { 
        'Authorization': `token ${this.env.githubToken}`
      },
      params: {
        visibility: 'public',
        per_page: 100
      }
    }).toPromise();
    console.log(result.data);

    return result.data;
  }

}
