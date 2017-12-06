import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className = 'UserOutput'>
            <p> This is {props.username} </p>
            <p> {props.username} loves to write and contribute open source code</p>
            <p> {props.username} creates new modules and push it on github.com</p>
            <p> {props.username} is awesome</p>
            <p> </p>
            <p> Be like {props.username} !!! </p>
        </div>
    )
}

export default userOutput;