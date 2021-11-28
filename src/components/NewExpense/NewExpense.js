import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e' + Math.random().toString(36).slice(2),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const addNewExpenseHandler = () => {
    setShowForm(true);
  };

  const stopEditingHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
      {!showForm && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
