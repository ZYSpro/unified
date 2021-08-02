"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableService = void 0;
const common_1 = require("@nestjs/common");
const fetch_1 = require("../../utils/fetch");
let TableService = class TableService {
    async details(id) {
        const details = await fetch_1.fetch(global.API_CONTENT, '/table/details', { id });
        return details;
    }
};
TableService = __decorate([
    common_1.Injectable()
], TableService);
exports.TableService = TableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3RhYmxlLXBhZ2UvaW5kZXguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsNkNBQXlDO0FBT3pDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFVO1FBQ3RCLE1BQU0sT0FBTyxHQUFHLE1BQU0sYUFBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3pFLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7Q0FDRixDQUFBO0FBTFksWUFBWTtJQUR4QixtQkFBVSxFQUFFO0dBQ0EsWUFBWSxDQUt4QjtBQUxZLG9DQUFZIn0=