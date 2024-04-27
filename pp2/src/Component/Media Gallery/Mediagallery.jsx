import React, { useState } from "react";
import "../Media Gallery/Mediagallery.css";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Mediagallery = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    // Get the selected file from the input element
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Implement file upload logic here, such as sending the file to a server
    console.log("File uploaded:", selectedFiles);
  };

  return (
    <div className="media-gallery">
      <div className="media-gallery-container">
        <span>{`Media Gallery `}</span>
        <span className="span1">*</span>
      </div>
      <div className="text60">
        <div className="insert-two-to">Insert two to three images</div>
        <div className="file-format-supported-container">
          <span className="span4">*</span>
          <span className="file-format-supported">{`File format supported : .jpeg, .jpg, .png and less than 2mb in size `}</span>
        </div>
      </div>

      {selectedFiles.map((file, index) => (
        <div key={index}>
          <img
            src={URL.createObjectURL(file)}
            alt={`file-${index}`}
            style={{
              width: "100px",
              height: "50px",
              margin: "5px",
              display: "flex",
              flexDirection: "row",
            }}
          />
          <span>{file.name}</span>
        </div>
      ))}

      <div className="button-2">
        <input type="file" multiple onChange={handleFileChange} />
        <div onClick={handleUpload} className="button3">
          Insert images
        </div>
      </div>
    </div>
  );
};

export default Mediagallery;
