import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import './calculator.css'


interface PropsInterface{
    setIsgameStart: (arg0: boolean)=> void;
    setResult: (arg0: string) => void;
    result: string
}

const symbols = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', 0, '.', '=', '-']

const Calculator = ({setIsgameStart, setResult, result}: PropsInterface) => {
    const [example, setExample] = useState('')
    const [error, setError] = useState('')

    useEffect(()=>{
        if (result){
            setExample(result)
        }
    },[])
    const setInputValue = (symbol: string | number) =>{
        // Тут бы, на самом деле сделать все возможные проверки, что мы вводим, но мне лень
        // Возможно ты не такой лентяй))
        if (symbol === '='){
            try{
                const result = eval(example) 
                if (result === Infinity){
                    setError('Вы пытались делить на 0')
                    return setExample('')  
                }
                if(result === undefined) return;
                setResult(eval(example).toString())
                setIsgameStart(true)
            }catch(e){
                setError('Вы вели не коректное выражение!')
                setExample('')
            }
        }else{
            setExample(example + symbol)
        }
    }
    return (
        <div className='Calculator'>
            <div className='ResultElement'>
                <Input setExample={setExample} example={example}/>
                
            </div>
            <div  className='Error'>
                {error}
            </div>
            <div className='Buttons'>
                {symbols.map((symbol, index) =>
                    <Button symbol={symbol} setInputValue={setInputValue} key={index}/>
                )}
            </div>
        </div>
    );
};

export default Calculator;