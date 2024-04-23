import React, { useState } from "react";
import "./PhotoUpload.scss";
import { Silhouette } from "../Silhouette/Silhouette";
import { useNavigate } from "react-router-dom";

const PhotoUpload = () => {
  const [silhouetteState, setSilhouetteState] = useState("figureOnly");
  const navigate = useNavigate();

  const changeState = () => {
    switch (silhouetteState) {
      case "figure-only":
        setSilhouetteState("silhouette");
        break;
      case "silhouette":
        setSilhouetteState("colored");
        break;
      default:
        setSilhouetteState("figure-only");
    }
  };

  const handleClick = () => {
    navigate("/upload");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <div className="photo-upload-section">
        <div>
          <p className="photo-caption">Photo example</p>
          <div className="photo photo__example"></div>
        </div>
        <div onClick={changeState}>
          <p className="photo-caption">Silhouette in creation</p>
          <Silhouette state={silhouetteState} />
        </div>
      </div>
      <button className="primary-cta" onClick={handleClick}>
        Take your photo
      </button>
      <button className="button__cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
};

export default PhotoUpload;
