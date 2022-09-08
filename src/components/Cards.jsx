import React from 'react';
import Card from "./Card";

const Cards = () => {
    return (
        <div className="cards">
            <div className="cards-container">
                {[...new Array(12)].map(item=><Card />)}
            </div>
        </div>
    );
};

export default Cards;