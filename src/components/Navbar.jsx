import React from "react";
import {Link} from 'react-router-dom';

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-[-5.25px] h-16 shadow-md border-b-2 rounded-lg border-gray-100 bgradient z-10">
      <nav className="flex items-center mx-auto h-full justify-center">

        <h1 className="flex text-white text-3xl font-monserrat">Dopis Ježíškovi</h1>



      </nav>
    </div>
  );
}

export default Navbar;
