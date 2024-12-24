
import Sharp from "sharp";


const image_rendaring = async (img_para) => {
    try {
      let inputPath = img_para.path;
  
      let sharp = await Sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 70 })
        .toBuffer();
        
      return sharp;
    } catch (error) {
      console.error("Image processing error:", error);
      throw error;
    }
  };
   export default image_rendaring;