import React, { Component } from 'react';
import TextField from '../../component/TextField';
import SelectField from '../../component/SelectField';
// import { RadioButton } from '../../component';
import Button from '../../component/Button';
import * as yup from 'yup';

const schema = yup.object().shape({
    inputvalue: yup.string().min(3).required(),
})

class TextFieldBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: '',
            error: {
                inputvalue: '',
                value: '',
            },
            fields: {},
        };
    }
    handleChange = field => (event) => {
        console.log(field, "wwwwwwwwwwwwwwwwwwwwwwwwww"); 
        this.setState({ [field]: event.target.value },
            this.handleValidate(field));
            console.log('value>>>>>>>',this.state);
    }
    handleValidate = (field) => {
        console.log(field)
        const { inputvalue, error } = this.state;
        schema.validate(
            { inputvalue },
            { abortEarly: false },
        )
            .then(() => {
                console.log('sdfghjdfghjk');
                this.setState({
                    error: { ...error, [field]: ''}
                })
            })
            .catch((errors) => {
                console.log('---i', errors, field);
                this.handleError(errors, field, error);
            })

    }
    handleOnBlurr = (field) => {
        this.handleValidate(field);
    }
    handleError = (errors, field, error) => {
        // let parseError = {};
        console.log('handleError>>>>>>>>.', errors, field, error)
        if (errors) {
            errors.inner.forEach((err) => {
                if (err.path === field) {
                    this.setState({
                        error: { ...error, [field]: err.message}
                    })
                }
            })
        }

    }
    handleClick = () => {
        console.log("-----------------------");
        this.handleValidate();
        console.log("sdcsdcsdcsdcsdcsdc");
    }
    render() {
        const { inputvalue, error } = this.state;
        console.log("render error", error);
        return (
            
            <>
            <div>
            <form onSubmit={this.handleClick}>
                    <TextField
                        value={inputvalue}
                        handleChange={ this.handleChange('inputvalue')}
                        handleOnBlurr={() => this.handleOnBlurr('inputvalue')}
                     />
                    {
                        error && (
                            <span>{error.inputvalue}</span>
                        )
                    }

                    <SelectField
                        option={
                            [
                                { value: "Cricket", label: 'Cricket' },
                                { value: "Football", label: "Football" },
                            ]

                        } />
                </form>
                <Button
                // value="bvalue" 
                >Submit</Button>
            </div>
            </>
        )
    }

}
export default TextFieldBox;