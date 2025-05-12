import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8">
      <div className="w-full lg:w-1/2 max-w-lg">
        <h2 className="text-4xl font-bold mb-4">
          Transforming Your <span className="text-blue-500">IoT Solutions</span>
        </h2>
        <p className="text-gray-600 mb-6">
          From Smart Trash Systems to Electric Car Charging Stations, Volly Tech delivers end-to-end IoT solutions.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Explore Our Solutions
        </button>
      </div>

      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
        <video
          ref={videoRef}
          className="rounded shadow-lg w-full"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          muted
          loop
        />

        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-transparent p-2 rounded-full border-none shadow text-white"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </section>
  );
}
