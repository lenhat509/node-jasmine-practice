"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
it('expect myFunc(3) to be equal to 9', () => {
    expect((0, __1.default)(3)).toEqual(9);
});
