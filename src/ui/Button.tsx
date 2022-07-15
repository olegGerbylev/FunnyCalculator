import React from 'react';

interface PropsInterface{
    symbol: string | number;
    setInputValue: (symbol: string | number) => void;
}

const Button = ({symbol, setInputValue}: PropsInterface) => {

    const buttonEvent = (symbol: string | number) =>{
        setInputValue(symbol)
    }

    return (
        <div className='Button' onClick={() => buttonEvent(symbol)}>
            {symbol}
        </div>
    );
};

export default Button;