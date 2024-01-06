import React from "react";
import { MdClose } from "react-icons/md";
import "./modal.css";

import "./modal.css";
const Modal = ({ movie, status, toggleModal }) => {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <MdClose />
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        frameBorder="0"
        title={`${movie.title} | Official Trailer`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modal;
