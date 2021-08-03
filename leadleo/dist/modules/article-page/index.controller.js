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
    async mArticleDetails(req, res) {
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
    common_1.Get('/article/details'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "articleDetails", null);
__decorate([
    common_1.Get('/mobile/article/details'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "mArticleDetails", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "articleSearch", null);
AppController = __decorate([
    common_1.Controller('/'),
    __metadata("design:paramtypes", [index_service_1.ArticleService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2FydGljbGUtcGFnZS9pbmRleC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwRDtBQUcxRCxpREFBc0M7QUFFdEMsbURBQWdEO0FBR2hELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFDeEIsWUFBNkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUcvRCxLQUFLLENBQUMsY0FBYyxDQUFRLEdBQVksRUFBUyxHQUFhO1FBQzVELElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRztnQkFDVixPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsR0FBRztnQkFDYixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzthQUNqQixDQUFBO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBTSxDQUFXLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDaEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNwQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDWCxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxlQUFlLENBQVEsR0FBWSxFQUFTLEdBQWE7UUFDN0QsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHO2dCQUNWLE9BQU8sRUFBRSxHQUFHO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDbkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2FBQ2pCLENBQUE7WUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLHNCQUFNLENBQVcsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNoQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQ3BCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNYLENBQUMsQ0FBQyxDQUFBO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7SUFDSCxDQUFDO0lBR0QsS0FBSyxDQUFDLGFBQWEsQ0FBUSxHQUFZLEVBQVMsR0FBYTtRQUMzRCxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQ3BDLENBQUE7WUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLHNCQUFNLENBQVcsR0FBRyxFQUFFO2dCQUN6QyxNQUFNLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDaEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNwQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDWCxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUEzREM7SUFEQyxZQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDRixXQUFBLFlBQUcsRUFBRSxDQUFBLEVBQWdCLFdBQUEsWUFBRyxFQUFFLENBQUE7Ozs7bURBaUIvQztBQUdEO0lBREMsWUFBRyxDQUFDLHlCQUF5QixDQUFDO0lBQ1IsV0FBQSxZQUFHLEVBQUUsQ0FBQSxFQUFnQixXQUFBLFlBQUcsRUFBRSxDQUFBOzs7O29EQWlCaEQ7QUFHRDtJQURDLFlBQUcsQ0FBQyxTQUFTLENBQUM7SUFDTSxXQUFBLFlBQUcsRUFBRSxDQUFBLEVBQWdCLFdBQUEsWUFBRyxFQUFFLENBQUE7Ozs7a0RBa0I5QztBQTlEVSxhQUFhO0lBRHpCLG1CQUFVLENBQUMsR0FBRyxDQUFDO3FDQUUrQiw4QkFBYztHQURoRCxhQUFhLENBK0R6QjtBQS9EWSxzQ0FBYSJ9