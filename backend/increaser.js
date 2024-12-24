import sharp from "sharp";
const quality_enhancer = async (img_para) => {
    let inputPath = img_para.path;
try
  {const enhancedImage = await sharp(inputPath)
    .resize({
        width: 2020, 
        fit: sharp.fit.cover,
        kernel: sharp.kernel.lanczos3, 
      })
      .sharpen()
      .modulate({
        brightness: 1.2, 
        saturation: 1.2, 
      })
      .jpeg({
        quality: 90, 
        progressive: true, 
      })
      .toBuffer();
    return enhancedImage}
    catch(err){
        console.log("the out put is missing",err)
    }
};
export default quality_enhancer