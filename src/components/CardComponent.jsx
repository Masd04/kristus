import React from 'react';


const CardComponent = ({ card, index }) => {
    const bgColor = index % 2 === 0 ? 'bg-red-500' : 'bg-green-500';
    console.log(index, bgColor);


    return (
        <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 bg-gray-100`}>
            <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center m-3">
                    <img className="h-[20rem] xs:h-full w-full object-contain xs:object-cover md:w-48 mx-0" src={card.image} alt={card.name} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-xl text-green font-bold font-monserrat">{card.name}</div>
                    <p className="mt-2 text-gray-500 text-lg">{card.description}</p>
                    {card.links && card.links.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.url} target="_blank" className="block mt-1 text-lg leading-tight font-medium text-red hover:underline">
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardComponent;