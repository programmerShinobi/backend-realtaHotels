"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImageToStorage = void 0;
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path = require('path');
const validExtensions = ['jpg', 'jpeg', 'png'];
const validMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];
exports.saveImageToStorage = {
    storage: (0, multer_1.diskStorage)({
        destination: './image',
        filename: (req, file, cb) => {
            const fileExtension = path.extname(file.originalname);
            const fileName = (0, uuid_1.v4)() + fileExtension;
            cb(null, fileName);
        },
    }),
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = validMimeTypes;
        allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
    }
};
//# sourceMappingURL=saveImage.js.map