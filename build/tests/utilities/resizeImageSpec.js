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
const resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
describe('test resize image function', () => {
    it('should return resized image name if name,width and height are valid', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgDir = path_1.default.join(__dirname, '../../../assets');
        const resizedImage = yield (0, resizeImage_1.default)(path_1.default.join(imgDir, 'full'), path_1.default.join(imgDir, 'thumbnail'), 'fjord.jpg', 500, 500);
        expect(resizedImage).toBeTruthy();
    }));
});
