"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableModule = void 0;
const common_1 = require("@nestjs/common");
const index_controller_1 = require("./index.controller");
const index_service_1 = require("./index.service");
let TableModule = class TableModule {
};
TableModule = __decorate([
    common_1.Module({
        controllers: [index_controller_1.AppController],
        providers: [index_service_1.TableService]
    })
], TableModule);
exports.TableModule = TableModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdGFibGUtcGFnZS9pbmRleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBQ3ZDLHlEQUFrRDtBQUNsRCxtREFBOEM7QUFNOUMsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQUFHLENBQUE7QUFBZCxXQUFXO0lBSnZCLGVBQU0sQ0FBQztRQUNOLFdBQVcsRUFBRSxDQUFDLGdDQUFhLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csV0FBVyxDQUFHO0FBQWQsa0NBQVcifQ==