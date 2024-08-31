import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div>
        <label>Amount: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
