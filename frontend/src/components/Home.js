import React from "react";
import Movies from "./Movies";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/Movies" className="button">
        Check the movies!
      </Link>

      <img
        className="HomePageImg"
        src="https://user-images.githubusercontent.com/23629340/36983687-49a3d64e-2093-11e8-8b86-b11813f0cdba.png"
        alt="Home Page img"
      />
    </div>
  );
};

export default Home;
