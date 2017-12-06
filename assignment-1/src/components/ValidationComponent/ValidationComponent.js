import React from 'react';

const validationComponent = (props) => {
    let validationMessage = 'Text too short'; 

    if(props.textLength > 5){
        validationMessage = 'Text long enough';
    }

    return (
        <p> {validationMessage} </p>
    )
}

export default validationComponent;