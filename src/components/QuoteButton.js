import React from 'react';

const QuoteButton = ({changeQuote, randomColor, colors}) => {
   
    
    return (
        <div>
            <button onClick={changeQuote} className="button" style={{background: colors[randomColor]}}>
                <div><i className="fa-solid fa-chevron-right"></i></div>
            </button>
        </div>
    );
};

export default QuoteButton;
