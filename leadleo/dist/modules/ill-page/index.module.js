"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexModule = void 0;
const common_1 = require("@nestjs/common");
const index_controller_1 = require("./index.controller");
const index_service_1 = require("./index.service");
const report_module_1 = require("../report-page/report.module");
let indexModule = class indexModule {
};
indexModule = __decorate([
    common_1.Module({
        imports: [report_module_1.ReportModule],
        controllers: [index_controller_1.AppController],
        providers: [index_service_1.ApiService]
    })
], indexModule);
exports.indexModule = indexModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvaWxsLXBhZ2UvaW5kZXgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF1QztBQUN2Qyx5REFBa0Q7QUFDbEQsbURBQTRDO0FBQzVDLGdFQUEyRDtBQU8zRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUcsQ0FBQTtBQUFkLFdBQVc7SUFMdkIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN2QixXQUFXLEVBQUUsQ0FBQyxnQ0FBYSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDLDBCQUFVLENBQUM7S0FDeEIsQ0FBQztHQUNXLFdBQVcsQ0FBRztBQUFkLGtDQUFXIn0=