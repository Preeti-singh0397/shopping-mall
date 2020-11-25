import React from 'react';
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import{connect} from "react-redux";



function Header({ currentUser }) {
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
                        <div className="option" onClick={()=>auth.signOut()}>
                            SignOut
                         </div>
                        :
                        <Link to="/signin" className="option">
                            SignIn
                        </Link>
                }
            </div>

        </div>
    )
}

const mapStateToProps=state=>({currentUser:state.user.currentUser});

export default connect(mapStateToProps)(Header);