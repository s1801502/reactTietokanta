import React from 'react';

const Error = ({error}) => {
    let err = '';

    for (let key in error) {
        if (key === 'code')
            err += ` ${error[key]} `;
    }

    return <div>
        
        <h2>Care to try again?</h2>
        <h3 className="w3-animate-zoom w3-text-red">{err}</h3>
        </div>;
}

export default Error;