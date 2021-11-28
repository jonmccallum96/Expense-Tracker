import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((filteredExpense) => {
        return <ExpenseItem key={filteredExpense.id} id={filteredExpense.id} title={filteredExpense.title} amount={filteredExpense.amount} date={filteredExpense.date} />;
      })}
    </ul>
  );
};

export default ExpensesList;
