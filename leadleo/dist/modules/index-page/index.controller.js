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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const ssr_core_vue3_1 = require("ssr-core-vue3");
const index_service_1 = require("./index.service");
const report_service_1 = require("../report-page/report.service");
let AppController = class AppController {
    constructor(apiService, apiReportService) {
        this.apiService = apiService;
        this.apiReportService = apiReportService;
    }
    async handlerIndex(req, res) {
        try {
            const ctx = {
                request: req,
                response: res,
                apiService: this.apiService,
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
    common_1.Get('/'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "handlerIndex", null);
AppController = __decorate([
    common_1.Controller('/'),
    __metadata("design:paramtypes", [index_service_1.ApiService, report_service_1.ApiReportService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2luZGV4LXBhZ2UvaW5kZXguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEQ7QUFHMUQsaURBQXNDO0FBRXRDLG1EQUE0QztBQUM1QyxrRUFBZ0U7QUFHaEUsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN4QixZQUE2QixVQUFzQixFQUFtQixnQkFBa0M7UUFBM0UsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFtQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUc1RyxLQUFLLENBQUMsWUFBWSxDQUFRLEdBQVksRUFBUyxHQUFhO1FBQzFELElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRztnQkFDVixPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsR0FBRztnQkFDYixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7YUFDeEMsQ0FBQTtZQUNELE1BQU0sTUFBTSxHQUFHLE1BQU0sc0JBQU0sQ0FBVyxHQUFHLEVBQUU7Z0JBQ3pDLE1BQU0sRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNoQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQ3BCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNYLENBQUMsQ0FBQyxDQUFBO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXBCQztJQURDLFlBQUcsQ0FBQyxHQUFHLENBQUM7SUFDVyxXQUFBLFlBQUcsRUFBRSxDQUFBLEVBQWdCLFdBQUEsWUFBRyxFQUFFLENBQUE7Ozs7aURBbUI3QztBQXZCVSxhQUFhO0lBRHpCLG1CQUFVLENBQUMsR0FBRyxDQUFDO3FDQUUyQiwwQkFBVSxFQUFxQyxpQ0FBZ0I7R0FEN0YsYUFBYSxDQXdCekI7QUF4Qlksc0NBQWEifQ==