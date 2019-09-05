import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) =>  {
        const { inputvalue, handleChange, handleOnBlurr } = props;
        console.log(">>>>>>>>>>>>>>>>>", inputvalue);
        return (
            <div>
                <input type="text" value={inputvalue}
                    onChange={handleChange}
                    onBlur={handleOnBlurr}
                />
            </div>
        );
    }
TextField.propTypes = {
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
}
TextField.defaultProps = {
    error: 'Please enter and error message',
}
export default TextField;