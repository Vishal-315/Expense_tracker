// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import expenseService from '../services/expenseService';
import ExpenseForm from './ExpenseForm';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const data = await expenseService.getExpenses();
            setExpenses(data);
        } catch (error) {
            alert('Error fetching expenses');
        }
    };

    const handleDelete = async (id) => {
        try {
            await expenseService.deleteExpense(id);
            fetchExpenses();  // Refresh the expense list
        } catch (error) {
            alert('Error deleting expense');
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ExpenseForm fetchExpenses={fetchExpenses} />
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.description} - ${expense.amount} - {expense.date}
                        <button onClick={() => handleDelete(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
