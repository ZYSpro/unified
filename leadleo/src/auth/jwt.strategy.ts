import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

/**
 * 功能:
 *  1. 验证token是否合法
 *  2. 路由守卫: 验证用户是否有权限访问该路由
 */

// 自定义获取token值
const cookieExtractor = function (req) {
  if (req && req.cookies) {
    const token = req.cookies['token']
    return token
  }
  return null
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]), // 从哪里获取token
      ignoreExpiration: false, // 是否无视token 有效期
      secretOrKey: 'leadleo Dj', // SecretKey
      jsonWebTokenOptions: {}
    })
  }

  /**
   * 当使用@UseGuards(AuthGuard('jwt'))去校验身份时, 需要内部提供一个validate方法用于校验
   */
  async validate(payload: any) {
    return { customerId: payload.customerId }
  }
}
