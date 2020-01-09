"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const dinosours_controller_1 = require("./dinosours.controller");
describe('Dinosours Controller', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [dinosours_controller_1.DinosaursController],
        }).compile();
        controller = module.get(dinosours_controller_1.DinosaursController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=dinosours.types.js.map