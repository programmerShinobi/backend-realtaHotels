import { diskStorage } from "multer";
import {v4 as uuidv4} from 'uuid';
// import path from 'path';
const path = require('path')
type validExtension = 'png' | 'jpg' | 'jpeg'
type validMimeType = 'image/png' | 'image/jpg' | 'image/jpeg'

const validExtensions:validExtension[] = ['jpg','jpeg','png']
const validMimeTypes: validMimeType[] = ['image/jpeg','image/jpg','image/png']

export const saveImageToStorage = {
    storage:diskStorage({
        destination:'./image',
        filename: (req,file,cb) =>{
            const fileExtension:string = path.extname(file.originalname);
            const fileName:string = uuidv4() + fileExtension

            cb(null, fileName)
        },
        
    }),
    fileFilter: (req, file,cb)=>{
        const allowedMimeTypes:validMimeType[] = validMimeTypes;
        allowedMimeTypes.includes(file.mimetype) ? cb(null,true) : cb(null,false)
    }
}