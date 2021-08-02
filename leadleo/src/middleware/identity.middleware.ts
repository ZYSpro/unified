import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../auth/auth.service'
// import { UserService } from '../../user/user.service'

/**
 * 统一处理前后台用户身份
 * 请求时, 挂载用户身份到req.user上面
 * 返回时, 对比用户信息是否有更新, 如果有更新, 重新更新token到前台
 * 张雨生 2021-04-08
 */
@Injectable()
export class IdentityMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.cookies.token ? this.authService.verify(req.cookies.token) : null
      console.log('user: ', user)
      next()
    } catch (err) {
      next()
    }
  }
}
