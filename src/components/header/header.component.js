import React from 'react';
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import CartDropdowm from "../cart-dropdown/cart-dropdowm.component"



function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link to="/">
                <Logo className=".logo-container" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>
                            SignOut
                         </div>
                        :
                        <Link to="/signin" className="option">
                            SignIn
                        </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                    <CartDropdowm />
            }
        </div>
    )
}

const mapStateToProps =createStructuredSelector
    ({
        currentUser:selectCurrentUser,
        hidden:selectCartHidden
    });

export default connect(mapStateToProps)(Header);