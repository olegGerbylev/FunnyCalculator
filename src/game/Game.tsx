import React, { useEffect, useState } from 'react';
import ButtonForGame from '../ui/ButtonForGame';
import Pictur from '../ui/Pictur';
import SecretString from '../ui/SecretString';
import './game.css'

interface PropsInterface{
    setIsgameStart: (arg0: boolean)=> void;
    result: string;
    setResult: (arg0: string)=> void
}

const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-'] 

const Game = ({setIsgameStart, result, setResult}: PropsInterface) => {
    const secretWordArray  = Array.from(result)
    const [secretSymbolArray, setSecretSymbolArray] = useState<string[]>([])
    const [errorCounter, setErrorCounter] = useState(0)

    useEffect(()=>{
        let array = []
        for(let i = 0; i < result.length; i++){
            array.push('_')
            setSecretSymbolArray(array)
        }
    },[])

    const checkAnswer = (symbol: string | number) =>{
        let array = [...secretSymbolArray]
        if (result.includes(symbol.toString())){
            secretWordArray.forEach((string, index)=>{
                if (string === symbol){
                    array[index] = symbol
                }
            })
            if (!(array.includes('_'))){
                setTimeout(()=>{setIsgameStart(false)},1000)
            }
            setSecretSymbolArray(array)
            return 'green'
        }
        setErrorCounter(errorCounter + 1)
        if (errorCounter + 1 === 3){
            setResult('')
        }
        return 'red'
    }

    return (
        <div className='Game'>
            
            <Pictur errorCounter={errorCounter}/>
            {errorCounter === 3 ?
                <> 
                    <h1 style={{color: 'red'}}>Иди учи математику! Чтоб из за таких как ты, Васи не гибли.</h1>
                    <button onClick={() => setTimeout(()=> setIsgameStart(false), 0)}>Вернуться к калькулятору!</button>
                </>
            :
                <>
                    <div className='Prompt'>
                        {'Ответ - это расчёт. Удачи))'}
                    </div>
                    <div className='SecretString'>
                    {secretSymbolArray.map((string, index)=>
                        <SecretString string={string} key={index}/>
                    )}
                    </div>
                    <div className='choseAnswer'>
                        {symbols.map((symbol, index)=>
                            <ButtonForGame symbol={symbol} setInputValue={checkAnswer}  key={index}/>
                        )}
                    </div>            
                </>
            }
        </div>
    );
};

export default Game;