import React from 'react';


const CardComponent = ({ card, index }) => {
    const bgColor = index % 2 === 0 ? 'bg-red-500' : 'bg-green-500';
    const isSpecialCard = card.name === "Dvoufázový odličovač očí";
    const imageStyle = isSpecialCard ? 'h-[15rem] w-[10rem]' : 'h-[20rem] xs:h-full w-full';
    const diffStyle = card.name === "bude doplněno";
    const diffStyleUse = diffStyle ? 'w-[9rem]' : 'h-[20rem] xs:h-full w-full';

    return (
        <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-10 bg-gray-100 bg-opacity-90`}>
            <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center m-3">
                    <img className={`${imageStyle} ${diffStyleUse} object-contain xs:object-cover md:w-48 mx-0`} src={card.image} alt={card.name} />
                </div>
                <div className="px-8 pb-8 pt-0 md:pt-5">
                    <div className="uppercase tracking-wide text-xl text-green font-bold font-monserrat">{card.name}</div>
                    <p className="mt-2 text-gray-900 text-lg">{card.description}</p>
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