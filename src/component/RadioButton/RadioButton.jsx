import React, { Component } from 'react';


class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: 'cricket2',
            name: 'cricket2'

        }
    }
    handleRadioButtonValue = (e) => {
        //console.log(e.value);
        this.setState({
            radioValue: e.value,
            name: e.name

        });
    }

    render() {
        const { radioValue, name } = this.state;
        const { radiOptions } = this.props;
        //console.log(radioValue, '-------------------------', radiOptions);

        return (
            <>
                <h2>what you do</h2>
                {
                    radiOptions.map((radioData, index) => {

                        return <label key={radioData.name} >
                            <span>{radioData.name}</span>
                            <div>
                                <input
                                    onChange={() => this.handleRadioButtonValue(radioData)}
                                    type="radio"
                                    value={radioValue}
                                    defaultChecked={index === 0 ? radioData.value : null}
                                    name={name}
                                />
                            </div>
                        </label>


                    })

                }

            </>
            // <div> 
            //     Hello
            // </div>
        );
    }
}
export default RadioButton;