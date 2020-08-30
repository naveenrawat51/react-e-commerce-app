import React from 'react';
import './Custom-button.scss';

const CustomButton = ({ children, ...otherProps}) => {
    return (
        <button className="custom-button" { ...otherProps }>
            {children}
        </button>
    );
}
 
export default CustomButton;