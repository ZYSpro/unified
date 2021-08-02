import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [PassportModule, JwtModule.register({ secret: 'leadleo Dj', signOptions: { expiresIn: 300000 } })],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
