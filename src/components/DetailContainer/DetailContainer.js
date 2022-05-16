import React, { useState, useEffect } from "react";
import VideoDetail from "../VideoDetail/VideoDetail";
import { baseUrl, apiKey } from "../../constants/Constants";
import { useParams } from "react-router-dom";
import "./style.css";

const DetailContainer = () => {
  // HOOKS State
  const [detail, setDetail] = useState([]);

  // HOOKS Params
  const { id } = useParams();

  // HOOKS Effect

  useEffect(() => {
    //FUNCTION

    const getData = async () => {
      try {
        const url = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=es-MX`;

        const data = await fetch(url);
        const getDetail = await data.json();
        setDetail(getDetail);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  console.log(detail);
  return (
    <>
      <h2>{detail.title}</h2>
      <div className="container-detail">
        <VideoDetail />
        <h5>{`Votos: ${detail.vote_average}/10`}</h5>
        <blockquote>{detail.overview}</blockquote>
      </div>
    </>
  );
};

export default DetailContainer;
