import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

const CustomerTable = ({ onSelectCustomer }) => {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setCustomers(data.customers);
            setTransactions(data.transactions);
            setFilteredCustomers(data.customers);
        };
        getData();
    }, []);

    const handleFilter = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = customers.filter((customer) =>
            customer.name.toLowerCase().includes(value)
        );
        setFilteredCustomers(filtered);
    };

    return (
        <div>
            <input type="text" placeholder="Filter by name" onChange={handleFilter} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.map((customer) => {
                        const totalAmount = transactions
                            .filter((t) => t.customer_id === customer.id)
                            .reduce((acc, t) => acc + t.amount, 0);
                        return (
                            <tr key={customer.id} onClick={() => onSelectCustomer(customer.id)}>
                                <td>{customer.name}</td>
                                <td>{totalAmount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
