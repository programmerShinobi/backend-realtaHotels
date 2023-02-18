"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const main_module_1 = require("./main.module");
const common_1 = require("@nestjs/common");
const port = process.env.PORT || 6000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.MainModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port, () => {
        console.log("Listen on port " + port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map