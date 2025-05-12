import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const excludedFiles = ['../assets/vollylogo.png'];
const logoModules = import.meta.glob('../assets/*.png', { eager: true });

const logos = Object.entries(logoModules)
  .filter(([path]) => !excludedFiles.includes(path))
  .map(([, mod]) => mod.default);

 export default function PartnersSection() {
   const containerRef = useRef(null);
   const [paused, setPaused] = useState(false);
 
   const scrollBy = (amount) => {
     if (containerRef.current) {
       const container = containerRef.current;
       container.scrollLeft += amount;
 
       // Loop when reaching end
       if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
         container.scrollLeft = 0;
       }
     }
   };
 
   const handleManualScroll = (amount) => {
     setPaused(true);
     scrollBy(amount);
 
     // Re-enable auto-scroll after 3 seconds or on user interaction
     setTimeout(() => setPaused(false), 3000);
   };
 
   useEffect(() => {
     if (paused) return;
     const interval = setInterval(() => scrollBy(2), 20);
     return () => clearInterval(interval);
   }, [paused]);
 
 
   return (
     <section className="py-16 bg-neutral-900">
       <div className="max-w-6xl mx-auto text-center mb-12">
         <h2 className="text-3xl font-bold text-white">Mobilite Partnerlerimiz</h2>
         <p className="text-white mt-2">We proudly work with these partners</p>
       </div>
 
       <div className="relative">
         <button
           onClick={() => handleManualScroll(-200)}
           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
         >
           <FaChevronLeft />
         </button>
 
         <div
           ref={containerRef}
           className="flex space-x-2 overflow-x-auto scrollbar-hide px-10"
         >
           {logos.map((logo, index) => (
             <div
               key={index}
               className="flex-shrink-0 flex items-center justify-center bg-transparent rounded-xl shadow w-48 h-32"
             >
               <img src={logo} alt={`Logo ${index + 1}`} className="max-h-24 object-contain" />
             </div>
           ))}
         </div>
 
         <button
           onClick={() => handleManualScroll(200)}
           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
         >
           <FaChevronRight />
         </button>
       </div>
     </section>
   );
 }