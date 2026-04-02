import { CloudinaryStorage } from "multer-storage-cloudinary";
import {v2 as cloudinary} from "cloudinary"


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
}
);


const storagerofilepic=new CloudinaryStorage(
    {
        cloudinary:cloudinary,
        params:{
           folder:"Devhire/profilepic",
           allowed_formats: ["jpg", "png", "jpeg"]
        }
    }
);


const storageResume = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Devhire/resume",
        allowed_formats: ["pdf"]
    }
})

export {storagerofilepic,storageResume,cloudinary};
