import React from 'react';

function Message(props) {
    return (
        <div className="message">
            <span>Author: {props.name}</span>
            <p>{props.message}</p>
        </div>
    );
}

export default Message;