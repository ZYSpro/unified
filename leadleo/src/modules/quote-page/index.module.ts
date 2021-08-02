import { Module } from '@nestjs/common'
import { AppController } from './index.controller'
import { ApiService } from './index.service'
import { ReportModule } from '../report-page/report.module'

@Module({
  imports: [ReportModule],
  controllers: [AppController],
  providers: [ApiService]
})
export class indexModule {}
