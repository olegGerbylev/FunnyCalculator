import React from 'react';

interface PropsInterface{
    errorCounter: number
}

const Pictur = ({errorCounter}: PropsInterface) => {
    
    let path =  '/assets/mistake'+(errorCounter + 1)+'.jpg'

    return (
        <div className='Picture'>
            <img src={path} width={'400px'} height={'450px'}/>
        </div>
    );
};

export default Pictur;