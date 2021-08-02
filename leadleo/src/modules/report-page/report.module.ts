import { Module } from '@nestjs/common'
import { ReportController } from './report.controller'

import { ApiReportService } from './report.service'

@Module({
  imports: [],
  controllers: [ReportController],
  providers: [ApiReportService],
  exports: [ApiReportService]
})
export class ReportModule {}
