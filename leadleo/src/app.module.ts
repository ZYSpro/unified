import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { indexModule } from './modules/index-page/index.module'
import { ReportModule } from './modules/report-page/report.module'
import { ArticleModule } from './modules/article-page/index.module'
import { SizeproModule } from './modules/sizepro-page/index.module'
import { TableModule } from './modules/table-page/index.module'
import { AuthModule } from './auth/auth.module'

import { IdentityMiddleware } from './middleware/identity.middleware'

@Module({
  imports: [indexModule, ReportModule, ArticleModule, SizeproModule, TableModule, AuthModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(IdentityMiddleware).forRoutes('/')
  }
}
