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
    
    return result.data;
  }

  async getFileContents(owner: string, repo: string, path: string) {
    const result = await this.http.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: { 
        'Authorization': `token ${this.env.githubToken}`
      },
    }).toPromise();
  
    if (!result.data.content) {
      throw new Error('Unable to get file contents');
    }
  
    return {
      content: result.data.content,
      sha: result.data.sha,
    };
  }

  async updateFile(owner: string, repo: string, path: string, message: string, content: string, sha: string) {
    const result = await this.http.put(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      message,
      content: Buffer.from(content).toString('base64'),
      sha,
    }, {
      headers: {
        'Authorization': `token ${this.env.githubToken}`
      }
    }).toPromise();

    return result.data;
  }
  

}
