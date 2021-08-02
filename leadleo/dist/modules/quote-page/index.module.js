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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvcXVvdGUtcGFnZS9pbmRleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBQ3ZDLHlEQUFrRDtBQUNsRCxtREFBNEM7QUFDNUMsZ0VBQTJEO0FBTzNELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRyxDQUFBO0FBQWQsV0FBVztJQUx2QixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDLGdDQUFhLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUMsMEJBQVUsQ0FBQztLQUN4QixDQUFDO0dBQ1csV0FBVyxDQUFHO0FBQWQsa0NBQVcifQ==