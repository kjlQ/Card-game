import React, {useEffect, useState} from 'react';
import Card from "./Card";

const Cards = () => {
    const cards = [
        "helmet",
        "helmet",
        "potion",
        "potion",
        "ring",
        "ring",
        "scroll",
        "scroll",
        "shield",
        "shield",
        "sword",
        "sword"
    ];
    const [matched , setMatched] = useState([])
    const [equal , setEqual] = useState([])
    useEffect(()=> {
        setTimeout(()=> {
            if(equal[0] && equal[0] === equal[1]) {
                setMatched([...matched,equal[0]])
            }
            if(equal.length>1) {
                setEqual([])
            }
        },200)
    },[equal])

    console.log('matched=>',matched)
    console.log('equal=>',equal)

    return (
        <div className="cards">
            <div className="cards-container">
                {cards.map((item,i)=><Card key={i} matched={matched} equal={equal} item={item} setEqual={setEqual}/>)}
            </div>
        </div>
    );
};

export default Cards;