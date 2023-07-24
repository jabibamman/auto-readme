import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class UpdateReadme {
  private readonly logger = new Logger(UpdateReadme.name);

  @Cron(CronExpression.EVERY_30_MINUTES)
  handleCron() {
    this.logger.debug('Called every 30 minutes');
  }
}
