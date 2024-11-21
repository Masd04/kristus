import React, { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import Vyber from '../components/vyber';
import cardData1 from '../data/cards1.json';
import styles from "../style"
import { bg } from "../static/img";

function About() {
  const [cards1, setCards] = useState([]);

useEffect(() => {
    setCards(cardData1);
}, []);

return (
  <>
  

  <div className="fixed bg-cover top-0 left-0 right-0 bottom-0 z-[-10]" style={{ backgroundImage: `url(${bg})`}}></div>

  <div className="relative z-0">

      <Vyber />

    <div className="flex-col justify-center">

    <div className="relative bg-yellow-100 shadow-lg rounded-lg pt-6 px-7 sm:px-16 w-11/12 md:w-2/3 lg:w-1/2 max-w-3xl mx-auto 
            border border-gray-300 text-gray-800 
            font-hw font-medium text-lg leading-relaxed
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/paper.png')] before:opacity-50 before:z-0
            after:content-[''] after:block after:h-1 after:w-full after:border-b after:border-dashed after:border-gray-300 after:mt-4
            transform rotate-3">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-center mb-4">Milý <a className="text-red-300">Ježíšku..</a></h1>
                <p>
                Je nad slunce jasné, že ve věci hodnosti mi všichni z dálky koukáte na záda.<br />
                Z dohoto důvodu se skromně domnívám, že pod stromkem naleznu vše ze seznamu, ne-li více podobných překvapení.
                </p>
                <p className="mx-4 mt-4 mb-8">
                    Poskytuji i přesto seznam produktů pro případ, že mě shledáš stále nedostatečně odměněným.
                    <br />
                    (což se poslední dobou stává až pravidelně)
                    
                </p>
                <p className={`text-red font-hw font-extrabold text-right xs:text-right text-3xl mt-5 mr-0 xs:mr-40`}>Maminka.</p>
            </div>
        </div>

    </div>

    <div className="p-4">
        {cards1.map((card, index) => (
            <CardComponent key={index} card={card} index={index} />
        ))}
    </div>

    <Vyber />

    </div>        
  
  </>
);
}


export default About
