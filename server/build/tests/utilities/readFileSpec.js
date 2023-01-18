"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const readFile_1 = __importDefault(require("../../utilities/readFile"));
describe('test read file function', () => {
    it('should return truthy value if file exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgDir = __dirname.split('\\').slice(0, -2).join('\\');
        const file = yield (0, readFile_1.default)(path_1.default.join(imgDir, 'assets', 'full'), 'fjord');
        expect(file).toBeTruthy();
    }));
    it('should return undefined if file is not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgDir = __dirname.split('\\').slice(0, -2).join('\\');
        const file = yield (0, readFile_1.default)(path_1.default.join(imgDir, 'assets', 'thumbnail'), 'anything');
        expect(file).toBeUndefined();
    }));
});
