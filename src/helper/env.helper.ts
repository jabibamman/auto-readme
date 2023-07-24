import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvHelper {
  constructor(private configService: ConfigService) {}

  get githubToken(): string {
    return this.configService.get<string>('GITHUB_TOKEN');
  }
}
