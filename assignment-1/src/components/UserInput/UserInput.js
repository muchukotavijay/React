import React from 'react';

const userInput = (props) => {
    var style = {
        inputStyle : {
            width: '60%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            boxShadow: '10px 10px 5px #888888'
        }
    }
    return (
        <input style = {style.inputStyle} onChange = {props.changed} type='text' value= {props.username}/>
    )
}

export default userInput;