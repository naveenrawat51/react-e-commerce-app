import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
            </div>
        </div>
    );
}

export default Header;