"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeproService = void 0;
const common_1 = require("@nestjs/common");
const fetch_1 = require("../../utils/fetch");
let SizeproService = class SizeproService {
    async details(id) {
        const details = await fetch_1.fetch(global.API_CONTENT, '/sizepro/details', { id });
        return details;
    }
};
SizeproService = __decorate([
    common_1.Injectable()
], SizeproService);
exports.SizeproService = SizeproService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NpemVwcm8tcGFnZS9pbmRleC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyw2Q0FBeUM7QUFPekMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQVU7UUFDdEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDM0UsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztDQUNGLENBQUE7QUFMWSxjQUFjO0lBRDFCLG1CQUFVLEVBQUU7R0FDQSxjQUFjLENBSzFCO0FBTFksd0NBQWMifQ==