import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";


function CartDropdowm({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {                   
                    cartItems.map(cartItem=>(<CartItem  key={cartItem.id} item={cartItem}/>))
                }
            </div>
            <CustomButton >Go to CheckOut</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdowm);