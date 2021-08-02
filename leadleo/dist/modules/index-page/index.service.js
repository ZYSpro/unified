"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const index_mock_1 = require("./index.mock");
let ApiService = class ApiService {
    async index() {
        return await Promise.resolve(index_mock_1.default);
    }
};
ApiService = __decorate([
    common_1.Injectable()
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2luZGV4LXBhZ2UvaW5kZXguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsNkNBQStCO0FBRy9CLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFDckIsS0FBSyxDQUFDLEtBQUs7UUFDVCxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBSSxDQUFDLENBQUE7SUFDcEMsQ0FBQztDQUNGLENBQUE7QUFKWSxVQUFVO0lBRHRCLG1CQUFVLEVBQUU7R0FDQSxVQUFVLENBSXRCO0FBSlksZ0NBQVUifQ==