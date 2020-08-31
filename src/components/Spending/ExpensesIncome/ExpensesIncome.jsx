import React from 'react';
import '../../../styles/Spending/ExpenseIncome/ExpenseIncome.css'

const ExpensesIncomes = (props) => {
        return (
            <div className="Expenses-Income">
                <div className="Expenses">
                    <header>Expenses</header>

                    <div className="Expenses__Sum">
                        {props.expenses} <span>USD</span> 
                    </div>
                </div>

                <div className="Income">
                    <header>Income</header>

                    <div className="Income__Sum">
                        {props.income} <span>USD</span> 
                    </div>
                </div>
            </div>
        );
};

export default ExpensesIncomes;