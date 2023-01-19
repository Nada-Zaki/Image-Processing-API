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
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
const isValidUrl_1 = require("../../middleware/isValidUrl");
const isFileExist_1 = require("../../middleware/isFileExist");
const isFileResized_1 = require("../../middleware/isFileResized");
const images = (0, express_1.Router)();
images.get('/', isValidUrl_1.isValidUrl, isFileExist_1.isFileExist, isFileResized_1.isFileResized, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const width = +req.query.width;
    const height = +req.query.height;
    const { file } = res.locals;
    const fullDirPath = path_1.default.join(__dirname, '../../../assets', 'full');
    const thumbDirPath = path_1.default.join(__dirname, '../../../assets', 'thumbnail');
    try {
        yield (0, resizeImage_1.default)(fullDirPath, thumbDirPath, file, width, height);
        res.sendFile(path_1.default.join(thumbDirPath, file));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}));
exports.default = images;
