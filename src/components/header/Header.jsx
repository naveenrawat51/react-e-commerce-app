import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartItem from '../cart-icon/cart-icon';
import Cart from '../cart/cart';
const Header = ({ currentUser, cartHidden }) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/'>
                    HOME
                </Link>
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to="/contact-us">
                    CONTACT
                </Link>
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className="option" to="/signin">
                        SIGN IN
                        </Link>}
                        <CartItem/>
            </div>
            { !cartHidden ? <Cart/> : null }
        </div>
    );
}

const mapStateToProps = ({user, cart}) => ({
    currentUser: user.currentUser,
    cartHidden: cart.hidden
})


export default connect(mapStateToProps)(Header);