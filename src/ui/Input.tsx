import React from 'react';

interface PropsInterface{
    example: string
    setExample: (arg: string)=> void
}

const Input = ({example, setExample}: PropsInterface) => {
    return (
        <div className='Input'>
            <button onClick={()=>setExample('')}>очистить</button>
            <input readOnly={true} value={example}/>
        </div>
    );
};

export default Input;