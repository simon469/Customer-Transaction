import React from 'react';
import { Bar } from 'react-chartjs-2';

const TransactionGraph = ({ customerId, transactions }) => {
    const filteredTransactions = transactions.filter(
        (t) => t.customer_id === customerId
    );

    const data = {
        labels: filteredTransactions.map((t) => t.date),
        datasets: [
            {
                label: 'Transaction Amount',
                data: filteredTransactions.map((t) => t.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h3>Transaction Graph</h3>
            <Bar data={data} />
        </div>
    );
};

export default TransactionGraph;
