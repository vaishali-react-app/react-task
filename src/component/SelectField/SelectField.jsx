import React, { Component } from 'react';
import RadioButton from '../RadioButton';
import { data } from './data';

class SelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOptions: 'Cricket',
        }
    }
    handleSelectOption = (event) => {
        this.setState({
            selectOptions: event.target.value
        });
    }
    // componentDidMount() {
    //     this.setState({ 
    //         selectOptions: 'Cricket',
    //     })
    // }

    radioData = () => {
        const { selectOptions } = this.state;
        if (selectOptions === 'Cricket') {
            return data.cricket;
        }
        else {
            return data.footBall;
        }
    }
    render() {
        
        //console.log(selectOptions);
        const { option = [] } = this.props;

        return (
            <div>
               

                <div className="selectwrapper">
                    <select onChange={this.handleSelectOption}>
                        {
                            option.map((data, index) => (
                                <option key={data.value} value={data.value} defaultValue={index === 0 ? data.value : null}>{data.label}</option>

                            ))
                        }
                    </select>

                </div>

                <RadioButton
                    radiOptions={this.radioData()}

                    defaultValue
                />
            </div>
        );
    }
}
export default SelectField;