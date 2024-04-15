import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    //My Version
   transactions.map( ({amount})  => amount<0?expense += amount:income+=amount);

 

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'> +${Math.abs(income).toFixed(2)}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='money minus'> -${Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    )
}


