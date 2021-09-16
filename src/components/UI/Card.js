import React from 'react';

import './Card.css'
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={ classes }>
            <p>{props.expenseTitle}</p>
            { props.children }
        </div>
    );

}

export default Card;