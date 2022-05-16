import React from "react";
import { Card, Col } from "react-bootstrap";

const CardPopular = (movie) => {
  return (
    <>
      <Col>
        <Card border="dark">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </Card>
      </Col>
    </>
  );
};

export default CardPopular;
