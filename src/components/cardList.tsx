import React, { useState, useEffect } from "react";
import Card from "./card.tsx";
import CardSurprise from "./cardSurprise.tsx";
import surprise from "../assets/surprise.png";

interface Beer {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
  abv: number;
}

function CardList(): JSX.Element {
  const [beerData, setBeerData] = useState<Beer[]>([]);
  const [showCustomCard, setShowCustomCard] = useState(true);
  const [randomBeerInfo, setRandomBeerInfo] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Beer[] = await response.json();
        const sortedData = data.sort((a, b) => b.abv - a.abv);

        setBeerData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardList">
      <h2>Our products</h2>
      <div className="d-flex flex-row flex-wrap row-gap-3">
        {beerData.slice(0, -2).map((beer) => (
          <Card
            key={beer.id}
            id={beer.id}
            name={beer.name}
            imgUrl={beer.image_url}
            tagline={beer.tagline}
            abv={beer.abv}
          />
        ))}
        {showCustomCard && (
          <CardSurprise
            name="surprise"
            imgUrl={surprise}
            tagline="Do you want to try something new?"
            abv="**"
          />
        )}
      </div>
    </div>
  );
}

export default CardList;
