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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2lsbC1wYWdlL2luZGV4LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDZDQUErQjtBQUcvQixJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBQ3JCLEtBQUssQ0FBQyxLQUFLO1FBQ1QsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFBO0FBSlksVUFBVTtJQUR0QixtQkFBVSxFQUFFO0dBQ0EsVUFBVSxDQUl0QjtBQUpZLGdDQUFVIn0=