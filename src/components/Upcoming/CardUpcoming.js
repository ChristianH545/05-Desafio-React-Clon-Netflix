import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

const CardUpcoming = (movie) => {
  return (
    <>
      <Card className="item" border="dark">
        <Card.Img
          className="img"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
      </Card>
    </>
  );
};

export default CardUpcoming;
