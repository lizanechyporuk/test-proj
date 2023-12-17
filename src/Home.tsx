import React from "react";
import beers from "./assets/beers.png";
import CardList from "./components/cardList.tsx";

function Home(): JSX.Element {
  return (
    <div className="homePage w-100">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-5 col-12 p-0 order-1 order-md-0">
          <h1>
            Modern Ukrainian
            <br /> brewery
          </h1>
          <p className="m-0">
            We are sure that you will find something close to you, no matter
            what you like - a classic blanche or a mango milkshake, a strong
            stout or a light berliner. Even if you like sports, we have
            something for you.
          </p>
        </div>
        <div className="col-md-5 col-12 p-0 text-md-end text-center">
          <img src={beers} alt="Beers" className="img-fluid" />
        </div>
      </div>
      <CardList />
    </div>
  );
}

export default Home;
