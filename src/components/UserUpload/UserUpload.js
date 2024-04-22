import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./UserUpload.scss";
import cameraIcon from "../../assets/icons/camera-icon.svg";

const UserUpload = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // Triggers the file input when the button is clicked
  };

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert("Photo successfully captured");
      navigate("/step2");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="capture">
          <img src={cameraIcon} alt="" />
        </div>
        <button className="primary-cta" onClick={handleClick}>
          Take your photo
        </button>
        <input
          type="file"
          style={{ display: "none" }} // The file input is hidden
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button className="button__cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default UserUpload;
