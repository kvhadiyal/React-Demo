import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>
                {props.ingredients[igKey]}
            </li>);
        })
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>Budger has following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p> <strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>

        </Aux>
    );
}

export default orderSummary;