import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextFieldGeneric from '../../../../component/TextFieldGeneric/TextFieldGeneric';
import * as yup from 'yup';

const fieldSchema=yup.object().shape({
  TextField:yup.string().required().min(4)
})
export default class FormDialog extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
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
  handleClickOpen = () => {
    this.setState({ open: true });
    console.log('ok');
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { TextField,error } = this.state;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Add Trainee
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          
            <TextFieldGeneric value={TextField} 
            handleChange={ this.handleChange('TextField')}
            handleOnBlurr={() => this.handleOnBlurr('TextField')}
            />
            {
                error && (
                    <span>{error.inputvalue}</span>
                )
            }
           
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
