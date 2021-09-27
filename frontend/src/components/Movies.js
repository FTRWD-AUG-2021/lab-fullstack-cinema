import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Movies = () => {
  let [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/movies').then((res) => {
      console.log(res.data)
      setMovies(res.data);
  })
}, [])
return (
<div>
  {movies.map((movie) => {
    return (
    <h1>{movie.title}</h1>
    )
  })}
</div>
)}


export default Movies;
