import { Link } from "react-router-dom";
import vollylogo from "../assets/vollylogo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full top-0 left-0 z-50 p-4 pr-8 flex justify-between items-center text-text">
     <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition">
       <img src={vollylogo} alt="Volly Tech Logo" className="h-10" />
     </Link>
     <ul className="flex space-x-6 ml-6">
       <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Home</a></li>
       <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Solutions</a></li>
       <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">About</a></li>
       <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Contact</a></li>
     </ul>
    </nav>
  );
}
