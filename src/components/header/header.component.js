import React from 'react';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import CartDropdowm from "../cart-dropdown/cart-dropdowm.component";
import { HeaderComponent,OptionContainer,OptionLink,LogoComponent } from "./header.styles";



function Header({ currentUser, hidden }) {
    return (
        <HeaderComponent>
            <LogoComponent to="/">
                <Logo className="logo-container" />
            </LogoComponent>
            <OptionContainer>
                <OptionLink to="/shop" className="option">
                    Shop
                </OptionLink>
                <OptionLink to="/contact" className="option">
                    Contact
                </OptionLink>
                {
                    currentUser ?
                        <OptionLink as="div" onClick={() => auth.signOut()}>
                            SignOut
                         </OptionLink>
                        :
                        <OptionLink to="/signin" className="option">
                            SignIn
                        </OptionLink>
                }
                <CartIcon />
            </OptionContainer>
            {
                hidden ? null :
                    <CartDropdowm />
            }
        </HeaderComponent>
    )
}

const mapStateToProps =createStructuredSelector
    ({
        currentUser:selectCurrentUser,
        hidden:selectCartHidden
    });

export default connect(mapStateToProps)(Header);