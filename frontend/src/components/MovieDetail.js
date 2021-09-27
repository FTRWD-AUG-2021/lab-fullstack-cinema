import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// const Movie = () => {};

function MovieDetail(props) {
  let history = useHistory();
  let { movieId } = useParams();
  const [movie, setMovie] = useState({ stars: [] });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/moviedetail/${movieId}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      });
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.director}</h2>
      {movie.stars.map((star) => {
        return <p>{star}</p>;
      })}
      <img src={movie.image} />
    </div>
  );
}

export default MovieDetail;
