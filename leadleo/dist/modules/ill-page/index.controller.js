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
    async quoteDetails(req, res) {
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
    async quoteSearch(req, res) {
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
    common_1.Get('/details'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "quoteDetails", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "quoteSearch", null);
AppController = __decorate([
    common_1.Controller('/quote'),
    __metadata("design:paramtypes", [index_service_1.ApiService, report_service_1.ApiReportService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2lsbC1wYWdlL2luZGV4LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBEO0FBRzFELGlEQUFzQztBQUV0QyxtREFBNEM7QUFDNUMsa0VBQWdFO0FBR2hFLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFDeEIsWUFBNkIsVUFBc0IsRUFBbUIsZ0JBQWtDO1FBQTNFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFHNUcsS0FBSyxDQUFDLFlBQVksQ0FBUSxHQUFZLEVBQVMsR0FBYTtRQUMxRCxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMzQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQ3hDLENBQUE7WUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLHNCQUFNLENBQVcsR0FBRyxFQUFFO2dCQUN6QyxNQUFNLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDaEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNwQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDWCxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxXQUFXLENBQVEsR0FBWSxFQUFTLEdBQWE7UUFDekQsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHO2dCQUNWLE9BQU8sRUFBRSxHQUFHO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjthQUN4QyxDQUFBO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBTSxDQUFXLEdBQUcsRUFBRTtnQkFDekMsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ1gsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtJQUNILENBQUM7Q0FDRixDQUFBO0FBMUNDO0lBREMsWUFBRyxDQUFDLFVBQVUsQ0FBQztJQUNJLFdBQUEsWUFBRyxFQUFFLENBQUEsRUFBZ0IsV0FBQSxZQUFHLEVBQUUsQ0FBQTs7OztpREFtQjdDO0FBR0Q7SUFEQyxZQUFHLENBQUMsU0FBUyxDQUFDO0lBQ0ksV0FBQSxZQUFHLEVBQUUsQ0FBQSxFQUFnQixXQUFBLFlBQUcsRUFBRSxDQUFBOzs7O2dEQW1CNUM7QUE3Q1UsYUFBYTtJQUR6QixtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQ0FFc0IsMEJBQVUsRUFBcUMsaUNBQWdCO0dBRDdGLGFBQWEsQ0E4Q3pCO0FBOUNZLHNDQUFhIn0=