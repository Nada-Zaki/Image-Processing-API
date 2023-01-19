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
exports.isFileExist = void 0;
const path_1 = __importDefault(require("path"));
const readFile_1 = __importDefault(require("../utilities/readFile"));
const isFileExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const fullDirPath = path_1.default.join(__dirname, '../../assets', 'full');
    const file = yield (0, readFile_1.default)(fullDirPath, filename);
    if (!file) {
        return res.status(404).send('This image does not exist');
    }
    res.locals.file = file;
    next();
});
exports.isFileExist = isFileExist;
