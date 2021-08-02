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
let AppController = class AppController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async articleDetails(req, res) {
        try {
            const ctx = {
                request: req,
                response: res,
                articleService: this.articleService,
                query: req.query
            };
            const stream = await ssr_core_vue3_1.render(ctx, { stream: true });
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
    async articleSearch(req, res) {
        try {
            const ctx = {
                request: req,
                response: res,
                articleService: this.articleService
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
], AppController.prototype, "articleDetails", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "articleSearch", null);
AppController = __decorate([
    common_1.Controller('/article'),
    __metadata("design:paramtypes", [index_service_1.ArticleService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2FydGljbGUtcGFnZS9pbmRleC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwRDtBQUcxRCxpREFBc0M7QUFFdEMsbURBQWdEO0FBR2hELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFDeEIsWUFBNkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUcvRCxLQUFLLENBQUMsY0FBYyxDQUFRLEdBQVksRUFBUyxHQUFhO1FBQzVELElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRztnQkFDVixPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsR0FBRztnQkFDYixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzthQUNqQixDQUFBO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBTSxDQUFXLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDaEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNwQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDWCxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxhQUFhLENBQVEsR0FBWSxFQUFTLEdBQWE7UUFDM0QsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHO2dCQUNWLE9BQU8sRUFBRSxHQUFHO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYzthQUNwQyxDQUFBO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBTSxDQUFXLEdBQUcsRUFBRTtnQkFDekMsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ1gsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtJQUNILENBQUM7Q0FDRixDQUFBO0FBdkNDO0lBREMsWUFBRyxDQUFDLFVBQVUsQ0FBQztJQUNNLFdBQUEsWUFBRyxFQUFFLENBQUEsRUFBZ0IsV0FBQSxZQUFHLEVBQUUsQ0FBQTs7OzttREFpQi9DO0FBR0Q7SUFEQyxZQUFHLENBQUMsU0FBUyxDQUFDO0lBQ00sV0FBQSxZQUFHLEVBQUUsQ0FBQSxFQUFnQixXQUFBLFlBQUcsRUFBRSxDQUFBOzs7O2tEQWtCOUM7QUExQ1UsYUFBYTtJQUR6QixtQkFBVSxDQUFDLFVBQVUsQ0FBQztxQ0FFd0IsOEJBQWM7R0FEaEQsYUFBYSxDQTJDekI7QUEzQ1ksc0NBQWEifQ==