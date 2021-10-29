import React, { useEffect, useState } from "react";
import requests from "./request";
import axios from "./axios";
import "./css/Banner.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  let [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
          backgroundPosition: "top center",
        }}
      >
        <div className="banner_content">
          <h1 className="Banner_title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <div className="banner_button">Play</div>
            <div className="banner_button">My List</div>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </header>
    </>
  );
}

export default Banner;
