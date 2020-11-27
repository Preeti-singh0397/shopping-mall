import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";

function CartDropdowm() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton >Go to CheckOut</CustomButton>           
        </div>
    )
}

export default CartDropdowm;