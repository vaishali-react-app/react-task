import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Button=(props)=>{

    const { defaultColor , disabled , value , primaryColor , children,handleClick,error } = props;
    const defaultStyle = defaultColor ? style.btn : style.primaryColor;
    return(
        <>
            <button onClick={handleClick} value={value} type="submit" >{children}</button> 
        </>
    );


}
Button.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string, 
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
}
Button.defaultProps={
    color : 'red',
    disabled : false
}

export default Button;