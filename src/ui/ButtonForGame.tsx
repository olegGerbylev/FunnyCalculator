import React, { useState } from 'react';


interface PropsInterface{
    symbol: string | number;
    setInputValue: (symbol: string | number) => string;
}

const ButtonForGame = ({symbol, setInputValue}: PropsInterface) => {
    
    const [style, setStyle]= useState('none')
    const [color, setColor] = useState('black')
    
    const buttonEvent = (symbol: string | number) =>{
        if (style === 'none'){
            setColor(setInputValue(symbol))
            setStyle('line-through')
        }
    }
        return (
        <div className='Button' onClick={() => buttonEvent(symbol)} style={{textDecoration: style, color: color}}>
            {symbol}
        </div>
    );
};

export default ButtonForGame;