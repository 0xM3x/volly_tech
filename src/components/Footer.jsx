import { FaLinkedin, FaYoutube, FaInstagram  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 text-center sm:text-left">
        
        <div>
          <h3 className="text-2xl font-bold mb-2">Volly Tech</h3>
          <p className="text-gray-400">
            Empowering Industries with Smart IoT Solutions
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Solutions</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={24} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Volly Tech. All rights reserved.
      </div>
    </footer>
  );
}
