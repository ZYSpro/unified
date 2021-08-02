import { JwtService } from '@nestjs/jwt';
import { TokenRO, TokenUser } from './auth.interface';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    /**
     * 功能: 根据用户对象签发token
     * 张雨生 2021-03-29
     */
    login(user: TokenUser): TokenRO;
    /**
     * 功能: 验证token是否有效
     * 张雨生 2021-03-29
     */
    verify(token: string): TokenUser;
}
