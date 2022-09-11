import React, {useEffect, useState} from 'react';
import Card from "./Card";
import card from "./Card";

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
    const shuffle = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const [cardList,setCardList] = useState(shuffle(cards).map((name,id)=>{
        return {
            name,
            id,
            flipped:false,
            matched:false
        }
    }))


    const [flippedCards,setFlippedCards] = useState([])

    const [pointerEvent,setPointerEvent] = useState('all')


    const handleClick = (id) => {
        setTimeout(()=> {
            const currentCard = cardList.find(item=>item.id === id)
            currentCard.flipped = true
            setCardList([...cardList])
            setFlippedCards(prev=>[...prev,currentCard])
        },0)
    }

    useEffect(()=> {
        if (flippedCards[1] && flippedCards[0].name===flippedCards[1].name) {
            cardList.forEach(obj=>{
                if(obj.flipped) {
                    obj.matched=true;
                }
            })
            setCardList([...cardList])
        }
        if(flippedCards[1]) {
            setPointerEvent('none')
            setTimeout(()=> {
                setFlippedCards([])
                cardList.forEach(obj=>{
                    if(!obj.matched) {
                        obj.flipped=false;
                    }
                })
                setCardList([...cardList])
                setPointerEvent('all')
            },500)

        }


    },[flippedCards])

    console.log(cardList)

    return (
        <div className="cards">
            <div className="cards-container" style={{ pointerEvents: `${pointerEvent}` }}>
                {cardList.map(item=><Card {...item} handleClick={handleClick} />)}
            </div>
        </div>
    );
};

export default Cards;