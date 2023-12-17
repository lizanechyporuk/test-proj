import React, { useState, useEffect } from "react";

interface Beer {
  name: string;
  description: string;
  first_brewed: string;
  image_url: string;
  food_pairing: string[];
  brewers_tips: string;
}

function SurpriseProduct(): JSX.Element {
  const [beerData, setBeerData] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/random`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Beer[] = await response.json();
        setBeerData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="productPage w-100 h-100">
      {beerData && (
        <div className="row mx-auto justify-content-between">
          <div className="col-4 p-0">
            <img
              src={beerData.image_url}
              alt={beerData.name}
              className="img-fluid"
            />
          </div>
          <div className="col-7 p-0">
            <h1 className="m-0">{beerData.name}</h1>
            <p>{beerData.description}</p>
            <p>
              <b>First brewed:</b> {beerData.first_brewed}
            </p>
            <h2>Food pairing:</h2>
            <ul>
              {beerData.food_pairing.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
            <p>
              <b>Tips:</b> {beerData.brewers_tips}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SurpriseProduct;
