import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} selected={filterYear} />
        {props.expenses
          .filter((expense) => expense.date.getFullYear().toString() === filterYear)
          .map((filteredExpense) => {
            return <ExpenseItem key={filteredExpense.id} id={filteredExpense.id} title={filteredExpense.title} amount={filteredExpense.amount} date={filteredExpense.date} />;
          })}
      </Card>
    </div>
  );
};

export default Expenses;
