"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
const isValidUrl = (req, res, next) => {
    const filename = req.query.filename;
    const width = +req.query.width;
    const height = +req.query.height;
    if (!filename ||
        !width ||
        !height ||
        typeof width !== 'number' ||
        typeof height !== 'number') {
        return res
            .status(400)
            .send('invalid url, the url must be http://localhost:3000/api/images?filename=name&width=any-number&height=any-number');
    }
    next();
};
exports.isValidUrl = isValidUrl;
