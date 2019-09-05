import React from 'react';

const TextFieldGeneric=(props)=>{
    const {
        TextField,handleChange,handleOnBlurr
    } = props
return(
    <div>
        <input type="text" value={TextField} onBlur={handleOnBlurr} onChange={handleChange} />
    </div>
)
}

export default TextFieldGeneric;