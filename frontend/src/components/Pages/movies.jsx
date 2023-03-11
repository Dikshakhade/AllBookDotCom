import React from "react";
import "./Movies.css";
import ViewNoLog from "../headers/ViewNoLog";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
const Movies = () => {
  const [MovieData, setMovieData] = useState([]);
  useEffect(() => {
    axios
      .get("/movie")
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
=======
const Movies = () => {
  const MovieData = [
    {
      Title: "The Lion King",
      Year: "2019",
      Rating: 8.5,
      Runtime: "118 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    },
    {
      Title: "Mowgli: Legend of the Jungle",
      Year: "2018",
      Rating: 8.5,
      Runtime: "104 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
    },
    {
      Title: "Doctor Strange",
      Year: "2016",
      Rating: 8.5,
      Runtime: "115 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    },
    {
      Title: "John Wick",
      Year: "2014",
      Rating: 8.5,
      Runtime: "101 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    },
    {
      Title: "The Notebook",
      Year: "2004",
      Rating: 8.5,
      Runtime: "123 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    },
  ];
>>>>>>> 0b8f9f029cc671c26b2cff32f2a29ddf727cb117
  return (
    <>
      <ViewNoLog />
      {MovieData.map((movie, index) => {
        return (
          <div className="movie-div" key={index}>
            <div className="movie-parent-div">
              <div
                className="movie"
                id="movie-pic"
                style={{ backgroundImage: `url("${movie.Poster}")` }}
              >
                {/* <img
                  src=""
                  alt=""
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center",
                  }}
                /> */}
              </div>
              <div className="movie" id="movie-description">
                <div className="movie-des" id="movie-name">
                  {movie.Title}
                </div>
                <div className="movie-des" id="movie-rating">
                  {movie.Rating} /10
                </div>
                <div className="movie-des" id="movie-duration">
                  Duration : {movie.Runtime}
                </div>
                <div className="movie-des" id="movie-year">
                  Year : {movie.Year}
                </div>
              </div>
              <div className="movie" id="movie-bookseat">
                Book Seat
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
