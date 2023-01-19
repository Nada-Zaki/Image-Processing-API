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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImage = (fullDirPath, thumbDirPath, file, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    // Prevent sharp library from keeping previously resized image open even if we changed the scale next time
    sharp_1.default.cache(false);
    try {
        return yield (0, sharp_1.default)(path_1.default.join(fullDirPath, file))
            .resize(width, height)
            .toFile(thumbDirPath + `\\${file}`);
    }
    catch (_a) {
        throw new Error("Can't resize the image");
    }
});
exports.default = resizeImage;
