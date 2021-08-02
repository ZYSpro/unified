"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
/**
 * 功能:
 *  1. 验证token是否合法
 *  2. 路由守卫: 验证用户是否有权限访问该路由
 */
// 自定义获取token值
const cookieExtractor = function (req) {
    if (req && req.cookies) {
        const token = req.cookies['token'];
        return token;
    }
    return null;
};
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([cookieExtractor]),
            ignoreExpiration: false,
            secretOrKey: 'leadleo Dj',
            jsonWebTokenOptions: {}
        });
    }
    /**
     * 当使用@UseGuards(AuthGuard('jwt'))去校验身份时, 需要内部提供一个validate方法用于校验
     */
    async validate(payload) {
        return { customerId: payload.customerId };
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvand0LnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFtRDtBQUNuRCwrQ0FBbUQ7QUFDbkQsMkNBQTJDO0FBRTNDOzs7O0dBSUc7QUFFSCxjQUFjO0FBQ2QsTUFBTSxlQUFlLEdBQUcsVUFBVSxHQUFHO0lBQ25DLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7UUFDdEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxPQUFPLEtBQUssQ0FBQTtLQUNiO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDLENBQUE7QUFHRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsMkJBQWdCLENBQUMsdUJBQVEsQ0FBQztJQUN6RDtRQUNFLEtBQUssQ0FBQztZQUNKLGNBQWMsRUFBRSx5QkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsV0FBVyxFQUFFLFlBQVk7WUFDekIsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQVk7UUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDM0MsQ0FBQztDQUNGLENBQUE7QUFoQlksV0FBVztJQUR2QixtQkFBVSxFQUFFOztHQUNBLFdBQVcsQ0FnQnZCO0FBaEJZLGtDQUFXIn0=