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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const ssr_core_vue3_1 = require("ssr-core-vue3");
const report_service_1 = require("./report.service");
let ReportController = class ReportController {
    constructor(apiReportService) {
        this.apiReportService = apiReportService;
    }
    async handlerDetail(req, res) {
        try {
            const ctx = {
                request: req,
                response: res,
                apiReportService: this.apiReportService
            };
            const stream = await ssr_core_vue3_1.render(ctx, {
                stream: true
            });
            stream.pipe(res, { end: false });
            stream.on('end', () => {
                res.end();
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
};
__decorate([
    common_1.Get('/reading'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "handlerDetail", null);
ReportController = __decorate([
    common_1.Controller('/report'),
    __metadata("design:paramtypes", [report_service_1.ApiReportService])
], ReportController);
exports.ReportController = ReportController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9yZXBvcnQtcGFnZS9yZXBvcnQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEQ7QUFHMUQsaURBQXNDO0FBRXRDLHFEQUFtRDtBQUduRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUE2QixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFHbkUsS0FBSyxDQUFDLGFBQWEsQ0FBUSxHQUFZLEVBQVMsR0FBYTtRQUMzRCxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjthQUN4QyxDQUFBO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBTSxDQUFXLEdBQUcsRUFBRTtnQkFDekMsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ1gsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtJQUNILENBQUM7Q0FDRixDQUFBO0FBbkJDO0lBREMsWUFBRyxDQUFDLFVBQVUsQ0FBQztJQUNLLFdBQUEsWUFBRyxFQUFFLENBQUEsRUFBZ0IsV0FBQSxZQUFHLEVBQUUsQ0FBQTs7OztxREFrQjlDO0FBdEJVLGdCQUFnQjtJQUQ1QixtQkFBVSxDQUFDLFNBQVMsQ0FBQztxQ0FFMkIsaUNBQWdCO0dBRHBELGdCQUFnQixDQXVCNUI7QUF2QlksNENBQWdCIn0=