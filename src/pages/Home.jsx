
import React from "react";
import home_dices from "../assets/images/home_dices.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-around gap-10 select-none">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="w-[80%] max-w-[600px] lg:w-[45vw]"
          src={home_dices}
          alt="Dices"
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Welcome to</h2>
        <h2 className="text-6xl md:text-8xl font-bold mb-6">DICE GAME</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/rule">
            <Button text="Games Rule" />
          </Link>
          <Link to="/play">
            <Button text="Play Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
