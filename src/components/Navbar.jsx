import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import vollylogo from "../assets/vollylogo.png";
import smartTrash from "../assets/smart_trash.svg";
import chargeStation from "../assets/charge_station.jpg";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [activeItem, setActiveItem] = useState("trash");

  const solutions = [
    {
      item: "trash",
      title: "Smart Trash System",
      description: "Automated waste management with live capacity tracking and optimized collection routes.",
      image: smartTrash,
    },
    {
      item: "charging",
      title: "Car Charging Station",
      description: "Seamlessly manage electric vehicle charging with smart monitoring and reporting.",
      image: chargeStation,
    },
  ];


  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  const currentSolution = solutions.find(s => s.item === activeItem);

  return (
    <nav className="bg-white shadow fixed w-full top-0 left-0 z-50 p-4 pr-8 flex justify-between items-center text-text">
      <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition">
        <img src={vollylogo} alt="Volly Tech Logo" className="h-10" />
      </Link>

      <ul className="flex space-x-6 ml-6">
        <li><a href="/" className="transition-all duration-200 hover:scale-105 hover:font-bold">Home</a></li>

        <li
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer transition-all duration-200 hover:scale-105 hover:font-bold flex items-center gap-1">Solutions <FaChevronDown className="text-[6px]" /></span>
          {isOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white text-black rounded-lg shadow-2xl flex w-[900px] h-[300px] p-6 z-50 border border-gray-200">
              <ul className="w-1/3 pr-4 border-r border-gray-200">
                {solutions.map((item, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => setActiveItem(item.item)}
                    className={`p-2 cursor-pointer hover:bg-muted hover:font-bold rounded ${activeItem === item.item ? "bg-muted" : ""}`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className="w-2/3 pl-4 flex flex-col justify-center items-center text-center">
                <img src={currentSolution.image} alt={currentSolution.title} className="h-24 mb-2 rounded shadow" />
                <h3 className="text-lg font-semibold">{currentSolution.title}</h3>
                <p className="text-sm">{currentSolution.description}</p>
                <Link
                  to={`/solutions/${currentSolution.item}`}
                  className="text-primary mt-2 inline-block hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          )}
        </li>

        <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">About</a></li>
        <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Contact</a></li>
      </ul>
    </nav>
  );
}
