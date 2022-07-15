import React from 'react';

interface PropsInterface{
    string: string
}

const SecretString = ({string}: PropsInterface) => {
    return (
        <div className='String'>
            {string}
        </div>
    );
};

export default SecretString;