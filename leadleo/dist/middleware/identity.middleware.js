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
exports.IdentityMiddleware = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
// import { UserService } from '../../user/user.service'
/**
 * 统一处理前后台用户身份
 * 请求时, 挂载用户身份到req.user上面
 * 返回时, 对比用户信息是否有更新, 如果有更新, 重新更新token到前台
 * 张雨生 2021-04-08
 */
let IdentityMiddleware = class IdentityMiddleware {
    constructor(authService) {
        this.authService = authService;
    }
    async use(req, res, next) {
        try {
            const user = req.cookies.token ? this.authService.verify(req.cookies.token) : null;
            console.log('user: ', user);
            next();
        }
        catch (err) {
            next();
        }
    }
};
IdentityMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], IdentityMiddleware);
exports.IdentityMiddleware = IdentityMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2lkZW50aXR5Lm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJEO0FBRTNELHVEQUFrRDtBQUNsRCx3REFBd0Q7QUFFeEQ7Ozs7O0dBS0c7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUM3QixZQUE2QixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFDekQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3ZELElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1lBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQzNCLElBQUksRUFBRSxDQUFBO1NBQ1A7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksRUFBRSxDQUFBO1NBQ1A7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQVhZLGtCQUFrQjtJQUQ5QixtQkFBVSxFQUFFO3FDQUUrQiwwQkFBVztHQUQxQyxrQkFBa0IsQ0FXOUI7QUFYWSxnREFBa0IifQ==