import React from "react";
import { IoIosAdd } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import "./card.css";

const Card = ({ movie }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="" className="img-fluid" />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <IoIosAdd className="iconCard" />
            <CiPlay1 className="iconCard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
