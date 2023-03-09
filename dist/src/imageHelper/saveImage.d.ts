/// <reference types="multer" />
export declare const saveImageToStorage: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, cb: any) => void;
};
