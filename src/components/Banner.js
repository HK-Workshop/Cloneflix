import React from "react";
import { useState, useEffect } from "react";
import requests from "../configuration/Requests"
import "./Banner.scss";
import { BsPlayFill } from "react-icons/bs"
import { AiOutlineInfoCircle } from "react-icons/ai";

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = requests.fetchTrending
    }
  }
  )

  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Titre</h1>
        <p className="banner__description">
          Description
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <BsPlayFill />
            Lecture
          </button>
          <button className="banner__button">
            <AiOutlineInfoCircle />
            Plus d'infos
          </button>
        </div>
      </div>
    </header>
  )
}

export default Banner;
