import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Special ring={ring}>Special</Special>
        </div>
    );
};

export default Myself;