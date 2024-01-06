import React, { useState } from "react";
import "./playBtn.css";
import { CiPlay1 } from "react-icons/ci";
import Modal from "./Modal";

const PlayBtn = ({ movie }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <button className="playBtn" onClick={toggleModal}>
          <CiPlay1 className="play" />
        </button>

        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
};

export default PlayBtn;
