import React from 'react';
import backCard from '../images/backcard.png';

const Card = ({name,id,flipped,matched,handleClick}) => {
    const imgSrc = require(`../images/${name}-1.png`)

    return (
        <div className={`card ${flipped && 'flipped'}`}>
            <div className="card__face card__face--front" onClick={()=>handleClick(id)}>
                <img src={backCard} alt=""/>
            </div>
            <div className={`card__face card__face--back`}>
                <img src={imgSrc} alt=""/>
            </div>
        </div>
    );
};

export default Card;