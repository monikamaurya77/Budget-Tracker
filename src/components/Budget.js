import React from 'react';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

const Budget = () => {

    const { budget } = useContext(AppContext);

    return(
        <div className='alert alert-secondary mt-3'>
<span>Budget: Rs. {budget}</span>
</div>
    );
}

export default Budget;