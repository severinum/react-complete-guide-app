import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {

  const expenses = [
    { id: 'e1', title: 'Cat Insurance', amount: 299.99, date: new Date(2021, 7, 14) },
    { id: 'e2', title: 'Wardrobe', amount: 74.99, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Shoes', amount: 59.99, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'iMac 27', amount: 2299.99, date: new Date(2021, 5, 12) }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={ expenses } />
    </div>
  
  );
}

export default App;