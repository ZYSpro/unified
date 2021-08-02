import { Module } from '@nestjs/common'
import { AppController } from './index.controller'
import { SizeproService } from './index.service'

@Module({
  controllers: [AppController],
  providers: [SizeproService]
})
export class SizeproModule {}
