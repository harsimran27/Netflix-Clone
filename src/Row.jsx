import React, { useState, useEffect } from "react";
import axios from "./axios";

let Row = ({ title, fetchURL }) => {
  // let [movies,setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      console.log(request);
      return request;
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
