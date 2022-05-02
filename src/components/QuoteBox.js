
import React, {useState} from 'react';
import quote from "../quote.json"
import QuoteButton from "./QuoteButton"

const colors= [ "#63A5BF",  "green", "blue", "pink", "orange", "red","#F21365", "#F2B807", "#BF8415"]

const QuoteBox = () => {

    const randomIndex= Math.floor(Math.random()*quote.length);
    const [ index, setIndex] = useState(randomIndex);

    const changeQuote = () =>{
        const randomIndex= Math.floor(Math.random()*quote.length);
        setIndex(randomIndex) 
    }
    
    const randomColor = Math.floor(Math.random()*colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
 
    return (
        <div className='card' style={{color: colors[randomColor]}}>
            <i className="fa-solid fa-quote-left" style={{color: colors[randomColor]}} >
            </i>
            {quote[index].quote} <br></br><br></br>
           
           
            <p className="right">
            {quote[index].author}
           
           
            </p>
           
            <QuoteButton changeQuote={changeQuote} randomColor={randomColor} colors={colors}/>
            
            
        </div>
    );
};

export default QuoteBox;