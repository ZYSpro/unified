"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const ssr_server_utils_1 = require("ssr-server-utils");
const cookieParser = require("cookie-parser");
require('./conf/variable');
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    await ssr_server_utils_1.initialSSRDevProxy(app, { express: true });
    app.useStaticAssets(path_1.join(ssr_server_utils_1.getCwd(), './build'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('pug');
    const { serverPort } = ssr_server_utils_1.loadConfig();
    await app.listen(serverPort);
}
bootstrap().catch(err => {
    console.log(err);
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLHVDQUEwQztBQUUxQyx1REFBeUU7QUFFekUsOENBQTZDO0FBRTdDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTFCLDZDQUF3QztBQUV4QyxLQUFLLFVBQVUsU0FBUztJQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUF5QixzQkFBUyxDQUFDLENBQUE7SUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZCLE1BQU0scUNBQWtCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDaEQsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFJLENBQUMseUJBQU0sRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFFOUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ25ELEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFeEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLDZCQUFVLEVBQUUsQ0FBQTtJQUNuQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDOUIsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakIsQ0FBQyxDQUFDLENBQUEifQ==