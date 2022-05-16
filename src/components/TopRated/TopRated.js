import React, { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../../constants/Constants";
import CardRated from "../TopRated/CardRated";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const TopRated = () => {
  // FUNCTION ONCLICK
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  // HOOKS
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=es-MX`;

    try {
      const data = await fetch(url);
      const movies = await data.json();
      setMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  // HOOKS
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>TopRated</h2>
      <motion.div className="slide-container">
        <motion.div
          className="slide"
          drag="x"
          dragConstraints={{ right: 0, left: -4962.45 }}
        >
          {movies.map((movie) => (
            <div key={movie.id}>
              <motion.div
                onClick={() => goToDetail(movie.id)}
                className="movie"
              >
                <CardRated {...movie} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default TopRated;
