"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
const isValidUrl = (req, res, next) => {
    var _a, _b, _c;
    const filename = (_a = req.query.filename) !== null && _a !== void 0 ? _a : null;
    const width = (_b = parseInt(req.query.width)) !== null && _b !== void 0 ? _b : null;
    const height = (_c = parseInt(req.query.height)) !== null && _c !== void 0 ? _c : null;
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
