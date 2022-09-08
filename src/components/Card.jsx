import React from 'react';
import backCard from '../images/backcard.png';
import helmet from '../images/helmet-1.png';

const Card = () => {
    return (
        <div className="card">
            <div className="card__face card__face--front">
                <img src={backCard} alt=""/>
            </div>
            <div className="card__face card__face--back">
                <img src={helmet} alt=""/>

            </div>
        </div>
    );
};

export default Card;