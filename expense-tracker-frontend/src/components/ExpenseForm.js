// src/components/ExpenseForm.js

import React, { useState } from 'react';
import expenseService from '../services/expenseService';

const ExpenseForm = ({ fetchExpenses }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await expenseService.createExpense({ description, amount, date });
            fetchExpenses();  // Refresh the expense list
            setDescription('');
            setAmount('');
            setDate('');
        } catch (error) {
            alert('Error creating expense');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
