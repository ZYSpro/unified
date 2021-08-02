import { Module } from '@nestjs/common'
import { AppController } from './index.controller'
import { ArticleService } from './index.service'

@Module({
  controllers: [AppController],
  providers: [ArticleService]
})
export class ArticleModule {}
