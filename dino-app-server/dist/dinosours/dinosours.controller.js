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
const common_1 = require("@nestjs/common");
let DinosaursController = class DinosaursController {
    constructor() {
        this.dinoDb = {
            123: {
                id: "123",
                name: "Timmy Rexington",
                type: "Tyrannosaurus Rex",
                pictureUrl: "https://previews.123rf.com/images/rivansyam/rivansyam1703/rivansyam170300004/72901589-cartoon-t-rex-was-standing-with-two-legs.jpg",
                favoriteFood: ["Smaller Dinosaurs", "Chicago Style Pizza (Meat-lover)"],
                birthday: 67,
                hideRealName: false,
                bio: `I am one of the largest land carnivores of all time. I like to eat fellow dinosaurs, so I'm not very friendly. In my spare time, I like to practice touching my toes. Looking for someone that can scratch my back.`
            },
            456: {
                id: "456",
                name: "Tricia Wildleave",
                type: "Triceratops",
                pictureUrl: "someUrl",
                favoriteFood: ["Zucchini spaghetti", "Baked Kale"],
                hideRealName: false,
                birthday: 67,
                bio: "Only cool vegans or swipe left Plzzz. Oh btw add my Insta @TriciaRatops."
            },
            789: {
                id: "789",
                name: "Gabriel Espinoza",
                type: "Spinosaurus",
                pictureUrl: "someUrl",
                favoriteFood: ["Pterosaurs", "Seafood in general"],
                hideRealName: false,
                birthday: 67,
                bio: `New to the online thing. Strong sense of family. Love fishing. Only here to make friends.`
            },
            101: {
                id: "101",
                name: "Dippy Longneckerberger",
                type: "Diplodocus",
                pictureUrl: "someUrl",
                favoriteFood: ["Pterosaurs", "Seafood in general"],
                hideRealName: true,
                birthday: 67,
                bio: `I love to pick high hanging fruits.`
            },
            202: {
                id: "201",
                name: "Dippy Longneckerberger",
                type: "Diplodocus",
                pictureUrl: "someUrl",
                favoriteFood: ["Pterosaurs", "Seafood in general"],
                hideRealName: true,
                birthday: 67,
                bio: `Actor, Jurasic Park I, II, and Jurasic World.`
            }
        };
    }
    async getProfile(id, req) {
        const { name, type, pictureUrl, favoriteFood, birthday } = this.dinoDb[id];
        return { id, name, type, pictureUrl, favoriteFood, birthday };
    }
    async getBio(id, req) {
        const { bio } = this.dinoDb[id];
        return { bio };
    }
};
__decorate([
    common_1.Get(":id/profile"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DinosaursController.prototype, "getProfile", null);
__decorate([
    common_1.Get(":id/bio"),
    __param(0, common_1.Param("id")), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DinosaursController.prototype, "getBio", null);
DinosaursController = __decorate([
    common_1.Controller("dinosaurs")
], DinosaursController);
exports.DinosaursController = DinosaursController;
//# sourceMappingURL=dinosours.controller.js.map