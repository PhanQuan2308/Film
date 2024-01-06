import React from "react";
import "./movieContent.css";
import Button from "./Button";
import { CiBookmark } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";

const MovieContent = ({ movie }) => {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img
        src={movie.titleImg}
        alt=""
        className="movie-title"
        style={{ width: "10%" }}
      />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<CiBookmark />}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button icon={<IoIosAdd />} name="Mylist" />
      </div>
    </div>
  );
};

export default MovieContent;
