import express from "express";
import cors from "cors";
import multer from "multer";
import image_rendering from "./compression.js";
import quality_enhancer from "./increaser.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const upload = multer({
  dest: "uploads/",
});

let Compressedimg;
let increaserimg;

app.post("/imgs_opts", upload.single("img"), async (req, res) => { 
    const Cimage = req.file;
    let Compressedimg = await image_rendering(Cimage);
    const base64 = Compressedimg.toString("base64");
    res.status(200).json({ base64 });
});
app.post("/stand_img",upload.single("img"), async (req, res) => { 
  const Iimage = req.file;
  let increasedimg = await quality_enhancer(Iimage)
  const base64 = increasedimg.toString("base64");
    res.status(200).json({ base64 });


});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
