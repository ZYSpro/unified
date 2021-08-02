"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [passport_1.PassportModule, jwt_1.JwtModule.register({ secret: 'leadleo Dj', signOptions: { expiresIn: 300000 } })],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBdUM7QUFDdkMscUNBQXVDO0FBQ3ZDLCtDQUFpRDtBQUNqRCxpREFBNEM7QUFDNUMsaURBQTRDO0FBTzVDLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FBRyxDQUFBO0FBQWIsVUFBVTtJQUx0QixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx5QkFBYyxFQUFFLGVBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0csU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSwwQkFBVyxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDdkIsQ0FBQztHQUNXLFVBQVUsQ0FBRztBQUFiLGdDQUFVIn0=