import React, { useState } from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    let date = props.date
    let amount = props.amount;

    const clickHander = () => {
        setTitle('Updated Title');
    }

    return (
        <Card className="expense-item" >
            <ExpenseDate expenseDate = { date } />
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">$ { amount }</div>
            </div>
            <button onClick={clickHander} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
