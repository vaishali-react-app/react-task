import React, { Component } from 'react';

class SetState extends Component{
    constructor(){
        super();
        this.state={
            value:0,
            message:"message Text"
        }
    }
    onClick=()=>{
        this.setState({
            value:this.state.value+1
        });
    }
    render(){
        return(
            <button onClick={this.onClick}>
            {this.state.value}
            </button>
        );
    }
}
export default SetState;