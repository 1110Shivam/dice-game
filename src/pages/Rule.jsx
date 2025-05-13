import React from "react";

const Rule = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Game Rules</h1>
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
          Welcome to the Dice Game! It's a fun and simple game of chance where
          your goal is to guess the outcome of a dice roll and earn points.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">✅ How to Play</h2>
        <ol className="list-decimal list-inside space-y-6 text-base md:text-lg px-4 md:px-8">
          <li>
            <strong>Select a Number (1 to 6):</strong>
            <p className="ml-4 mt-2 text-gray-400">
              Before rolling the dice, pick any number between 1 and 6. This
              will be your guess for the upcoming roll.
            </p>
          </li>
          <li>
            <strong>Click the Dice to Roll:</strong>
            <p className="ml-4 mt-2 text-gray-400">
              Once you've selected a number, click on the dice image. The dice
              will spin and land on a random number between 1 and 6.
            </p>
          </li>
          <li>
            <strong>Check the Result:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-400 space-y-1">
              <li>
                <span className="font-medium">Correct Guess:</span> You get
                points equal to the dice number.
              </li>
              <li>
                <span className="font-medium">Wrong Guess:</span> You lose 2
                points.
              </li>
            </ul>
          </li>
          <li>
            <strong>Repeat and Play:</strong>
            <p className="ml-4 mt-2 text-gray-400">
              Keep guessing until you either win by reaching 10 points or lose
              by dropping to -10. Make your guesses wisely!
            </p>
          </li>
        </ol>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">🎯 Goal</h2>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
          Reach 10 points to win — but be careful! If your score drops to -10,
          it's game over. It’s a mix of luck and smart guessing!
        </p>
      </div>
    </div>
  );
};

export default Rule;
