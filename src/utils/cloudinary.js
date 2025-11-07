import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import { devNull } from 'os';

cloudinary.config({
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
  api_key:'process.env.CLOUDINARY_API_KEY',
  api_secret: 'process.env.CLOUDINARY_API_SECRET'
});

const uploadOnCloudinary = async (localFilePath) => {
  try{
    if(!loaclFilePath) return null
    //upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })

    //file has been uploaded successfully
    console.log("file is uploaded on cloudinary",
      response.url);
      return response;

  }catch(error){
    fs.unlinkSync(localFilePath) //remove the locally svaed 
    //file as the upload operation got failed
    return null;
  }
}


export {uploadOnCloudinary}


cloudinary.v2.uploader.upload('https://upload.wikimedia.org/wikipedia/commas/a/aeOlympic_flag.jpg',
  { public_id: "olympic_flag" },
  function(error, result) {console.log(result);}
);

