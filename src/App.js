import React, { useState } from 'react';
import CustomerTable from './components/CustomerTable';
import TransactionGraph from './components/TransactionGraph';
import { fetchData } from './services/api';

const App = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setTransactions(data.transactions);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Customer Transactions</h1>
            <CustomerTable onSelectCustomer={setSelectedCustomerId} />
            {selectedCustomerId && (
                <TransactionGraph
                    customerId={selectedCustomerId}
                    transactions={transactions}
                />
            )}
        </div>
    );
};

export default App;
