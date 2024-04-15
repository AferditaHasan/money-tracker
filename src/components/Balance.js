import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    //My version
    let balance = 0;
    transactions.map(transaction => balance = balance + transaction.amount);

    // Tutorial Version
    // const amounts = transactions.map(t => t.amount);
    // const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const sign = balance < 0 ? '-' : '+';
    return (
        <>
            <h4>Your Balance</h4>
            <h1 > {sign}$ {Math.abs(balance).toFixed(2)}</h1>
        </>
    )
}


