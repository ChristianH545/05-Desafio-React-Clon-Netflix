import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../../constants/Constants";
import YouTube from "react-youtube";

const VideoDetail = () => {
  // HOOKS State
  const [movie, setMovie] = useState([]);

  // HOOKS Params

  const { id } = useParams();

  //HOOKS Effect

  useEffect(() => {
    // FUNCTION

    const getData = async () => {
      try {
        const url = `${baseUrl}/movie/${id}/videos?api_key=${apiKey}`;
        const data = await fetch(url);
        const getMovies = await data.json();
        setMovie(getMovies.results[0].key);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const opts = {
    height: "410",
    width: "1200",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube className="video" videoId={movie} opts={opts} />;
};

export default VideoDetail;
