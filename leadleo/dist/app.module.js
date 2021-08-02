"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const index_module_1 = require("./modules/index-page/index.module");
const report_module_1 = require("./modules/report-page/report.module");
const index_module_2 = require("./modules/article-page/index.module");
const index_module_3 = require("./modules/sizepro-page/index.module");
const index_module_4 = require("./modules/table-page/index.module");
const auth_module_1 = require("./auth/auth.module");
const identity_middleware_1 = require("./middleware/identity.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(identity_middleware_1.IdentityMiddleware).forRoutes('/');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [index_module_1.indexModule, report_module_1.ReportModule, index_module_2.ArticleModule, index_module_3.SizeproModule, index_module_4.TableModule, auth_module_1.AuthModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF1RTtBQUN2RSxvRUFBK0Q7QUFDL0QsdUVBQWtFO0FBQ2xFLHNFQUFtRTtBQUNuRSxzRUFBbUU7QUFDbkUsb0VBQStEO0FBQy9ELG9EQUErQztBQUUvQywwRUFBcUU7QUFLckUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNwQixTQUFTLENBQUMsUUFBNEI7UUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0NBQ0YsQ0FBQTtBQUpZLFNBQVM7SUFIckIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsMEJBQVcsRUFBRSw0QkFBWSxFQUFFLDRCQUFhLEVBQUUsNEJBQWEsRUFBRSwwQkFBVyxFQUFFLHdCQUFVLENBQUM7S0FDNUYsQ0FBQztHQUNXLFNBQVMsQ0FJckI7QUFKWSw4QkFBUyJ9