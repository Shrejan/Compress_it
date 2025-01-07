import React, { useState } from "react";
import "./comp.css";
import axios from "axios";

const Compresser = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleImageUpload = async (event) => {
    const image = event.target.files[0];

    const formdata = new FormData();
    formdata.append("img", image);

    try {
      const response = await axios.post(
        "https://compress-it-kmoj.vercel.app/",
        formdata
      );
      try {
        const buffimage = response.data.base64;
        setDownloadUrl(`data:image/png;base64,${buffimage}`);
      } catch (er) {
        console.log("unexpected event:", er);
        
      }
    } catch (error) {
      console.log("Somthing went wrong fron backend:",error);
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
      <div>{ }</div>
    </>
  );
};

export default Compresser;
