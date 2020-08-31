import React from 'react';
import './Custom-button.scss';

const CustomButton = ({ children, type, isGoogleSignIn, ...otherProps}) => {
    return (
        <button type={type} className={`${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} { ...otherProps }>
            {children}
        </button>
    );
}
 
export default CustomButton;