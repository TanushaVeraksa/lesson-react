import React from 'react';

export default function ClickCounter ({number}) {
     const redColor = {color: "red"};
     const greenColor = {color: "green"};
    return ( <>
        <div>Counter {number < 2 ? "новичок" : number < 11 ? "умелый" :
                     number < 101 ? "мастер": "человек со большим количеством свободного времени" }
        </div> 
        <p>{number% 2 == 0 ? <span style = {greenColor}>Color</span> : <span style = {redColor}>Color</span>}</p> 
        </>
    )
}
