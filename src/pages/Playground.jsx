
import React, { useState, useEffect } from "react";
import Numbers from "../components/Numbers";
import dice1 from "../assets/images/RollDice1.png";
import dice2 from "../assets/images/RollDice2.png";
import dice3 from "../assets/images/RollDice3.png";
import dice4 from "../assets/images/RollDice4.png";
import dice5 from "../assets/images/RollDice5.png";
import dice6 from "../assets/images/RollDice6.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Playground = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(dice1);
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [showShakyMessage, setShowShakyMessage] = useState(false);
  const [canDismissShakyMessage, setCanDismissShakyMessage] = useState(false);
  const [width, height] = useWindowSize();

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const winSound = new Audio("/sounds/victory.mp3");
  const loseSound = new Audio("/sounds/lose.mp3");

  useEffect(() => {
    const handleClick = () => {
      if (canDismissShakyMessage) {
        setShowShakyMessage(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [canDismissShakyMessage]);

  const handleNumberSelect = (num) => setSelectedNumber(num);

  const rollDice = () => {
    if (gameOver) return;
    if (selectedNumber === null) {
      toast.warning("Please select a number before rolling the dice!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }
    setIsRolling(true);
    setTimeout(() => setIsRolling(false), 500);

    const randomIndex = Math.floor(Math.random() * 6);
    const rolledNumber = randomIndex + 1;
    setCurrentDice(diceImages[randomIndex]);
    setDiceValue(rolledNumber);

    if (selectedNumber === rolledNumber) {
      setScore((prev) => {
        const newScore = prev + rolledNumber;
        if (newScore >= 10) {
          setGameOver(true);
          setMessage("\ud83c\udfc6 You Win! Click Restart to play again.");
          winSound.play();
        } else {
          setMessage("\u2705 Correct Guess! + " + rolledNumber + " Points");
        }
        return newScore;
      });
    } else {
      setScore((prev) => {
        const newScore = prev - 2;
        if (newScore <= -10) {
          setGameOver(true);
          setMessage("\ud83d\udc80 Game Over! Click Restart to play again.");
          loseSound.play();
          setShowShakyMessage(true);
          setCanDismissShakyMessage(false);
          setTimeout(() => setCanDismissShakyMessage(true), 5000);
        } else {
          setMessage("\u274c Wrong Guess. -2 Points");
        }
        return newScore;
      });
    }
  };

  const handleRestart = () => {
    setShowShakyMessage(false);
    setScore(0);
    setMessage("");
    setGameOver(false);
    setSelectedNumber(null);
    setCurrentDice(dice1);
  };

  return (
    <div className="flex flex-col items-center justify-center select-none px-4 py-6">
      <ToastContainer />
      {message.includes("You Win") && <Confetti width={width} height={height} />}
      {showShakyMessage && (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <p className="text-4xl sm:text-6xl md:text-8xl font-bold text-red-500 animate-bounce">
            💀 YOU LOSE
          </p>
        </div>
      )}

      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-[#d3d7de] pt-5 mb-6">
        Welcome to the Dice Game! It's simple, fun, and all about your luck.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-10">
    
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Numbers
                key={num}
                number={num}
                onSelect={handleNumberSelect}
                isSelected={selectedNumber === num}
              />
            ))}
          </div>
          <h4 className="mt-2 font-mono font-bold text-lg md:text-2xl">Select Number</h4>
        </div>

    
        <div className="flex flex-col items-center">
          {!gameOver ? (
            <img
              className={`h-32 md:h-48 cursor-pointer ${isRolling ? "animate-roll" : ""}`}
              src={currentDice}
              alt="Dice"
              onClick={rollDice}
            />
          ) : (
            <div className="text-2xl md:text-4xl text-red-500 font-bold py-10">GAME OVER</div>
          )}

          <p className={`text-center font-bold mt-4 text-base md:text-xl ${
            message.includes("You Win")
              ? "text-green-500 animate-pulse"
              : message.includes("Game Over")
              ? "text-red-500"
              : "text-yellow-400"
          }`}>
            {message}
          </p>

          {!gameOver && <p className="font-mono font-bold text-lg md:text-2xl mt-2">Click on Dice to roll</p>}

          <div className="mt-4 flex flex-col gap-3">
            <Button text="Restart Game" onClick={handleRestart} />
            <Link to="/rule" onClick={() => setShowShakyMessage(false)}>
              <Button text="Show Rules" />
            </Link>
          </div>
        </div>

   
        <div className="flex flex-col items-center">
          <h4 className={`font-bold font-Poppins text-[6rem] md:text-[10rem] ${
            score < 0 ? "text-red-500" : "text-green-500"
          }`}>
            {score}
          </h4>
          <p className="font-mono font-bold text-lg md:text-2xl">Total Score</p>
        </div>
      </div>
    </div>
  );
};

export default Playground;
