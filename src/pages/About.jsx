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

    <div className="bg-yellow-200 w-[91%] mx-auto rounded-md pb-5 pt-4">
    <div className="select-none">
      
      <p className={`${styles.paragraph} text-black mx-3`}>
      Je nad slunce jasné, že ve věci hodnosti mi všichni z dálky koukáte na záda.<br />
      Z dohoto důvodu se skromně domnívám, že pod stromkem naleznu vše ze seznamu, ne-li více podobných překvapení.
            
      </p>
      <p className={`text-red font-cormorant font-extrabold text-center xs:text-right text-3xl mt-5  mr-0 xs:mr-40`}>Maminka.</p>

    </div>
    </div>

    </div>

    <div className="p-4">
        {cards1.map((card, index) => (
            <CardComponent key={index} card={card} index={index} />
        ))}
    </div>

    </div>        
  
  </>
);
}


export default About
