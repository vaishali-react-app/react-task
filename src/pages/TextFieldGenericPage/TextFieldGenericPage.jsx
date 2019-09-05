import React, { Component } from 'react';
import TextFieldGeneric from '../../component/TextFieldGeneric';
import * as yup from 'yup';

const fieldSchema=yup.object().shape({
    TextField:yup.string().required().min(4)
})
class TextFieldGenericPage extends Component{
    constructor(props){
        super(props);
        this.state={
            TextField:' ',
            error:{
                TextField:''
            }
        }
    }
    handleChange = field => (event) => {
        this.setState({ [field]: event.target.value }, this.handleValidate(field))
    }
    handleValidate=(field)=>{
        const { TextField, error} = this.state;
        fieldSchema.validate(
            {TextField},
            { abortEarly: false },
        )
        .then(()=>{
            this.handleError(null);
        }

        )
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
    handleClick=()=>{
        this.handleValidate();
    }
    render(){
        const { TextField,error } = this.state;
        return(
            <div>
            <TextFieldGeneric value={TextField} 
            handleChange={ this.handleChange('TextField')}
            handleOnBlurr={() => this.handleOnBlurr('TextField')}
            />
            {
                error && (
                    <span>{error.inputvalue}</span>
                )
            }
            </div>
        )
    }
}

export default TextFieldGenericPage;