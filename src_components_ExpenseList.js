import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, description: 'Coffee', amount: 5 },
    { id: 2, description: 'Groceries', amount: 50 }
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          {expense.description}: ${expense.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
