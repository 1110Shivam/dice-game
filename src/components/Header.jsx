import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-[#1e293b] shadow-md select-none">
      <div className="py-4 px-6 md:px-10 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl select-none font-bold">
          Dice Game
        </h2>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-lg md:text-xl font-semibold">
          <Link to="/">Home</Link>
          <Link to="/rule">Games Rules</Link>
          <Link to="/play">
            <button className="font-semibold text-white bg-[#1e293b] w-32 md:w-40 h-10 rounded-md text-base md:text-xl transition duration-200 border-2 border-transparent hover:bg-white hover:text-[#1e293b] hover:border-[#1e293b] hover:border-solid active:scale-95">
              Play Now
            </button>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 gap-4 text-lg font-semibold">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/rule" onClick={() => setIsMenuOpen(false)}>
            Games Rules
          </Link>
          <Link to="/play" onClick={() => setIsMenuOpen(false)}>
            <button className="font-semibold text-white bg-[#1e293b] w-full h-10 rounded-md text-base transition duration-200 border-2 border-transparent hover:bg-white hover:text-[#1e293b] hover:border-[#1e293b] hover:border-solid active:scale-95">
              Play Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
