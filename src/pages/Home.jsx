import React, { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import Vyber from '../components/Vyber';
import cardData from '../data/cards.json';
import styles from "../style"
import { bg } from "../static/img";

function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardData);
    }, []);

/*     const randomTilt = (Math.floor(Math.random() * 7) - 3).toString(); */

    return (
      <>
      

      <div className="fixed bg-cover top-0 left-0 right-0 bottom-0 z-[-10]" style={{ backgroundImage: `url(${bg})`}}></div>

      <div className="relative z-0">

          <Vyber />

        <div className="flex-col justify-center">

        
        <div className={`relative bg-white shadow-lg rounded-lg pt-6 px-7 sm:px-16 w-11/12 md:w-2/3 lg:w-1/2 max-w-3xl mx-auto 
            border border-gray-300 text-gray-800 
            font-hw font-medium text-lg leading-relaxed
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/paper.png')] before:opacity-50 before:z-0
            after:content-[''] after:block after:h-1 after:w-full after:border-b after:border-dashed after:border-gray-300 after:mt-4
            transform rotate-1`}>
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-center mb-4">Milý <span className="text-green">Ježíšku..</span></h1>
                <p>
                    Přestože jsem se letos stal promovaným bakalářem, neusínám na vavřínech a doslova se vrhám
                    na další hon po akademických vědomostech, a to v podobě studia inženýrského. V kombinaci s podávanými
                    výkony na ledě, strahovském koberci, doma, u babičky i na korporátní půdě by se mohlo jednat o vskutku
                    'bohulibé' počínání. Možná až tak bohulibé, že mi dary byly doručovány již s předstihem, a to 
                    v průběhu roku ve formě jak rodinných 
                    interakcí, tak likvidních prostředků. Nýbrž není, co bys mi více nadělil.
                </p>
                <p className="mx-4 mt-4 mb-8">
                    Poskytuji i přesto seznam produktů pro případ, že mě shledáš stále nedostatečně odměněným.
                    <br />
                    (což se poslední dobou stává až pravidelně)
                    
                </p>
                <p className={`text-red font-hw font-extrabold text-right xs:text-right text-3xl mt-5 mr-0 xs:mr-40`}>Tvůj Dádis.</p>
            </div>
        </div>

        </div>
{/* <div className={`relative transform rotate-${randomTilt} p-6`}> */}
        <div className="p-6">
            {cards.map((card, index) => (
                <CardComponent key={index} card={card} index={index} />
            ))}
        </div>

        <Vyber />

        </div>        
      
      </>
    );
}

export default Home

       {/*  <div className="bg-yellow-200 w-[91%] mx-auto rounded-md pb-5">
        <div className="select-none">
          <h1 className={`${styles.heading2} mb-2 ml-0 xs:ml-24`}>Milý Ježíšku...</h1>
          <p className={`${styles.paragraph} text-black mx-3`}>
          Přestože mi k Vánocům stačí zdraví a štěstí mých blízkých,
          moderní kapitalistická společnost na nás tlačí s výběrem dárků.<br />
          <span className="text-[0.9rem]">(pozn. autora: nejedná se o vyjádření nevděčnosti)</span> <br />
          Jsem si plně vědom toho, že i když pocházím
          z nesmírně zámožné rodiny, neměl bych tohoto privilegia zneužívat.<br />
          Poskytuji ti do nebes tedy pouze inspirační seznam věcí,
          jež by mě potěšily pod stromkem v případě, že mě shledáš dostatečně hodným.<br />       
          </p>
          <p className={`text-red font-cormorant font-extrabold text-center xs:text-right text-3xl mt-5 mr-0 xs:mr-40`}>Tvůj Dádis.</p>

        </div>
        </div> */}