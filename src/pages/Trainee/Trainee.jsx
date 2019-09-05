import React, { Component } from 'react';
import FormDialog from './components/AddDialog/AddDialog';
import style from '../Trainee/style';
import DialogBlock from './style';

class Trainee extends Component{
render(){
    return(
        <>
        <DialogBlock>
        <FormDialog />  
        </DialogBlock>
        </>
    );
}
}
export default Trainee;