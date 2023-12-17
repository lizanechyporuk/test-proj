import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

interface CardProps {
  id: number;
  name: string;
  imgUrl: string;
  tagline: string;
  abv: number;
}

function Card({ id, name, imgUrl, tagline, abv }: CardProps): JSX.Element {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraphVisibility = (): void => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div className="col-xl-4 col-lg-6 col-12 p-0 m-0">
      <div className="card">
        <div className="row justify-content-between align-items-center">
          <div className="col p-0">
            <img className="cardImg img-fluid" src={imgUrl} alt="Beer" />
          </div>
          <div className="col p-0">
            <h3 className="m-0">{name}</h3>
            <div className="tagline">
              <i
                className="bi bi-arrow-down-short"
                onClick={toggleParagraphVisibility}
              ></i>
              {isParagraphVisible && <p>{tagline}</p>}
            </div>
            <p className="abvContainer">ABV {abv}%</p>
            <Link to={`/product/${id}`} className="button border-0 text-start">
              Read more <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
