import React from 'react';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

const Remaining = () => {
    const {budget,expenses} = useContext(AppContext);

    function calculateRemaining(){
      let totalExpenses = expenses.reduce((acc,curr)=>{
          acc+=curr.cost;
          return acc;
      },0);
      return budget-totalExpenses;
    }


    return (
    <div className='alert alert-success mt-3'>
    <span>Remaining: Rs. {calculateRemaining()}</span>
    </div>
    );
}

export default Remaining;