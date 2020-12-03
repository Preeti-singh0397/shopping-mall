import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action";



function CartDropdowm({ cartItems, history, dispatch }) {
    return (
        <div className="cart-dropdown">
            {cartItems.length ?
                <div className="cart-items">
                    {
                        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    }
                </div> :
                <span className="empty-message">Your cart is empty</span>
            }
            <CustomButton onClick={() => {
                history.push("/checkout")
                dispatch(toggleCartHidden())
            }} >
                Go to CheckOut
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdowm));