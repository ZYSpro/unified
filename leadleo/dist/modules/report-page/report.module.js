"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const common_1 = require("@nestjs/common");
const report_controller_1 = require("./report.controller");
const report_service_1 = require("./report.service");
let ReportModule = class ReportModule {
};
ReportModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [report_controller_1.ReportController],
        providers: [report_service_1.ApiReportService],
        exports: [report_service_1.ApiReportService]
    })
], ReportModule);
exports.ReportModule = ReportModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlcG9ydC1wYWdlL3JlcG9ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBQ3ZDLDJEQUFzRDtBQUV0RCxxREFBbUQ7QUFRbkQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFHLENBQUE7QUFBZixZQUFZO0lBTnhCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxFQUFFO1FBQ1gsV0FBVyxFQUFFLENBQUMsb0NBQWdCLENBQUM7UUFDL0IsU0FBUyxFQUFFLENBQUMsaUNBQWdCLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsaUNBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFlBQVksQ0FBRztBQUFmLG9DQUFZIn0=