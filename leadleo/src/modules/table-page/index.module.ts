import { Module } from '@nestjs/common'
import { AppController } from './index.controller'
import { TableService } from './index.service'

@Module({
  controllers: [AppController],
  providers: [TableService]
})
export class TableModule {}
