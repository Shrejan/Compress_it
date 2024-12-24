import React from "react";
import { Link } from "react-router-dom";
import "./ent.css";
const Entrypoint = () => {
  return (
    <>
      <div>
        <h3 className="gret">Welcome to Image Compressor!</h3>
      </div>
      <div>
        <h4 className="gret size">
          Struggling with large image files? We’ve got you covered!
        </h4>
      </div>

      <div className="bd">
        <div className="box">
          <div className="btn moving-rgb-border">
            <Link className="ent_txt" to="/compresser">
              Compresser
            </Link>
          </div>
          <div className="btn mg moving-rgb-border">
           
            <Link className="ent_txt" to="/increaser">
              dCompresser
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrypoint;
