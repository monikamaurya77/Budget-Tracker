import React from 'react';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

const SpentSoFar = () => {

    const {expenses} = useContext(AppContext);

    function calculateSpentSoFar(){
      let totalExpenses = expenses.reduce((acc,curr)=>{
          acc+=curr.cost;
          return acc;
      },0);
      return totalExpenses;
    }

    return(
     
          <div className='alert alert-primary mt-3'>
          <span>Spent so far: Rs. {calculateSpentSoFar()}</span>
          </div>
    );
}

export default SpentSoFar;