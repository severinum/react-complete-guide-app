import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month =  props.expenseDate.toLocaleString('en-US', { month: 'long' });
    const day =  props.expenseDate.toLocaleString('en-US', { day: '2-digit' });
    const year = props.expenseDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__year">{ month }</div>
            <div className="expense-date__day">{ day }</div>
            <div className="expense-date__month">{ year }</div>
        </div>
    );
}

export default ExpenseDate;