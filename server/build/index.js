"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/api/images', (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const fullDirPath = path_1.default.join(__dirname.split('\\').slice(0, -1).join('\\'), 'assets', 'full');
    const thumbDirPath = path_1.default.join(__dirname.split('\\').slice(0, -1).join('\\'), 'assets', 'thumb');
    let file;
    fs_1.default.readdir(fullDirPath, (err, images) => {
        if (err) {
            res.send('Unable to scan directory: ' + err);
        }
        images.forEach((image) => {
            if (image.split('.')[0] === filename) {
                file = image;
                console.log('image', image);
            }
        });
        if (!file) {
            res.send('This image does not exist');
        }
        else {
            (0, sharp_1.default)(path_1.default.join(fullDirPath, file))
                .resize(width, height)
                .toFile(thumbDirPath + `\\${file}`)
                .then((data) => res.send({ image: data }));
        }
    });
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
