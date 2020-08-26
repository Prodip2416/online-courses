import React from 'react';

const CartItem = (props) => {
    const { title, price } = props.item;
    return (
        <li className="list-group-item d-flex justify-content-between text-muted">
            <span>{title}</span><span> ${price}</span>
        </li>
    );
};

export default CartItem;