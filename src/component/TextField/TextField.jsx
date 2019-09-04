import React from 'react';
import PropTypes from 'prop-types';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//     inputValue: yup.string().required().min(3).label('name'),
// });



const TextField = (props) =>  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inputvalue: '',
    //         error: '',
    //     };
    // }
    //handlechange
    // handleChange = (event) => {
    //     this.setState({ inputvalue: event.target.value },
    //         this.handleValidate);
    // }
    // handleValidate = () => {
    //     const { inputValue } = this.state;
    //     schema.validate(
    //         { inputValue },
    //         { abortEarly: false },
    //     )
    //         .then(function () {
    //             console.log('sdfghjdfghjk');
    //         })
    //         .catch((error) => {
    //             console.log('---i', error);
    //             //this.handleError(error);
    //         })

    // }
    // handleError = (error) => {
    //     const parseError = {};
    //     if (error) {
    //         error.inner.forEach((error) => {
    //             parseError[error.path]=error.message;
    //         })
    //     }
    // }
    // handleOnBlurr = () => {
    //     console.log('---onBlur--')
    //     //this.handleValidate();
    // }

        // const { value } = this.props;
        // const { inputvalue, error = '' } = this.state;
        // console.log(inputvalue);
        // const errorStyle = error ? style.error : {};
        const { inputvalue, handleChange, handleOnBlurr } = props;
        console.log(">>>>>>>>>>>>>>>>>", inputvalue);
        return (
            <div>
                <input type="text" value={inputvalue}
                    onChange={handleChange}
                    onBlur={handleOnBlurr}
                />
                {/* {
                    error && (
                        <span style={{ ...errorStyle }}>{error}</span>
                    )
                } */}
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