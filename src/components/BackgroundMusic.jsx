import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const BackgroundMusic = () => {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    const playgroundMusic = "/sounds/playground.mp3";
    const generalMusic = "/sounds/general.mp3";

    if (audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.src = path === "/play" ? playgroundMusic : generalMusic;
      audioRef.current.load();
      audioRef.current.play().catch(() => {}); 
    }
  }, [location]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current.pause(); 
      } else {
        audioRef.current.play().catch(() => {}); 
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 cursor-pointer text-white text-4xl">
      <audio ref={audioRef} loop />
      <button onClick={toggleMute}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
