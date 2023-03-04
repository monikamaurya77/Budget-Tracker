import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';


const ExpenseList = () => {
 
  const {expenses} = useContext(AppContext);

  return (
    <>
      <h2 className="mt-4"> Expenses:</h2>
      <ul className="list-group">
        {expenses.map((item) => {
          return <ExpenseItem id={item.id} name={item.name} cost={item.cost} />;
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
