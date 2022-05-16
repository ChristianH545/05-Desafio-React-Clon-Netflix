import React, { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../../constants/Constants";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CardUpcoming from "./CardUpcoming";
import "./style.css";

const Upcoming = () => {
  // HOOKS
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const url = `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=es-MX`;
    try {
      const data = await fetch(url);
      const getMovies = await data.json();
      setMovies(getMovies.results);
    } catch (error) {
      console.log(error);
    }
  };
  // HOOKS
  useEffect(() => {
    getData();
  }, []);

  // FUNCTION ONCLICK
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <h2 className="title">Upcoming</h2>
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
                <CardUpcoming {...movie} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Upcoming;
