// src/services/expenseService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/expenses';

const getExpenses = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const createExpense = async (expense) => {
    const token = localStorage.getItem('token');
    await axios.post(API_URL, expense, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

const deleteExpense = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export default {
    getExpenses,
    createExpense,
    deleteExpense,
};
