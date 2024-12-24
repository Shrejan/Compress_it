/*import React, { useState } from "react";
import "./comp.css";
import imageCompression from "browser-image-compression";

const Compresser = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options); 
      const compressedUrl = URL.createObjectURL(compressedFile);
      setDownloadUrl(compressedUrl);
    } 
    catch (error) {
      console.error("Compression error:", error);
    }
  };

  return (
    <>
      <div className="body flex">
        <div className="outer_box flex">
          <div className="inner_box flex">
            <label htmlFor="fileInput" className="upload_label">
              Upload Image
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          
        </div>
        {downloadUrl && (
            <div className="download_section">
              <a
                href={downloadUrl}
                download="compressed-image.jpg"
                className="download_button"
              >
                Download Compressed Image
              </a>
            </div>
          )}
      </div>
    </>
  );
};

export default Compresser;*/