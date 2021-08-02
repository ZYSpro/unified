"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeproModule = void 0;
const common_1 = require("@nestjs/common");
const index_controller_1 = require("./index.controller");
const index_service_1 = require("./index.service");
let SizeproModule = class SizeproModule {
};
SizeproModule = __decorate([
    common_1.Module({
        controllers: [index_controller_1.AppController],
        providers: [index_service_1.SizeproService]
    })
], SizeproModule);
exports.SizeproModule = SizeproModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc2l6ZXByby1wYWdlL2luZGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBdUM7QUFDdkMseURBQWtEO0FBQ2xELG1EQUFnRDtBQU1oRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBQUcsQ0FBQTtBQUFoQixhQUFhO0lBSnpCLGVBQU0sQ0FBQztRQUNOLFdBQVcsRUFBRSxDQUFDLGdDQUFhLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUMsOEJBQWMsQ0FBQztLQUM1QixDQUFDO0dBQ1csYUFBYSxDQUFHO0FBQWhCLHNDQUFhIn0=