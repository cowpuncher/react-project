import React from "react";

const MessageBlock = () => {
    return (
        <div className="messageBlock">
            <div className="messageList">
                Inner message
            </div>
            <form className="formAddMessage">
                <input type="text" className="inputAddMessage" />
                <button type="button" className="btnAddMessage">Send</button>
            </form>
        </div>
    )
}

export default MessageBlock;