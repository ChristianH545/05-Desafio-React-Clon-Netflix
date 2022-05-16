import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { baseUrl, apiKey } from "../../constants/Constants";
import CardPopular from "./CardPopular";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  // hooks
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=es-MX`;

    try {
      const data = await fetch(url);
      const movies = await data.json();
      setMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const top5Movies = movies.slice(1, 11);

  return (
    <>
      <h2>Popular Movies</h2>
      <Row xs={1} md={5} className="g-2">
        {top5Movies.length ? (
          top5Movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <CardPopular {...movie} />
              </Link>
            </div>
          ))
        ) : (
          <div className="container-spinner">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </Row>
    </>
  );
};

export default PopularMovies;
