import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import TopRated from "../components/TopRated/TopRated";
import Upcoming from "../components/Upcoming/Upcoming";

const Inicio = () => {
  return (
    <>
      <NavBar />
      <PopularMovies />
      <TopRated />
      <Upcoming />
    </>
  );
};

export default Inicio;
