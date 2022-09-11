import React, {useEffect, useState} from 'react';
import backCard from '../images/backcard.png';

const Card = ({item,setEqual,matched,equal}) => {
    const [flipped,setFlipped] = useState(false)
    const imgSrc = require(`../images/${item}-1.png`)
    const handleClick = () => {
        setFlipped(true)
        setEqual(prev=>[...prev,item])
    }
    useEffect(()=> {
        if(equal[1] && !matched.includes(item)) {
            setFlipped(false)
            console.log(item)
        }
    },[equal])
    return (
        <div className={`card ${flipped && 'flipped'}`}>
            <div className="card__face card__face--front" onClick={()=>handleClick()}>
                <img src={backCard} alt=""/>
            </div>
            <div className={`card__face card__face--back`}>
                <img src={imgSrc} alt=""/>
            </div>
        </div>
    );
};

export default Card;