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
        {props.expenses.map((expense) => {
          return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
