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
exports.isFileResized = void 0;
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const readFile_1 = __importDefault(require("../utilities/readFile"));
const isFileResized = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const thumbDirPath = path_1.default.join(__dirname.split('\\').slice(0, -1).join('\\'), 'assets', 'thumbnail');
    try {
        const file = yield (0, readFile_1.default)(thumbDirPath, filename);
        if (!file) {
            next();
        }
        else {
            const metadata = yield (0, sharp_1.default)(path_1.default.join(thumbDirPath, file)).metadata();
            if (metadata.width === width && metadata.height === height) {
                return res.sendFile(path_1.default.join(thumbDirPath, file));
            }
            else {
                next();
            }
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.isFileResized = isFileResized;
