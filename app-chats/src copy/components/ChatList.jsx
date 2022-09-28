import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ChatList = () => {
    return (
        <>               
            <h1>Chat's list</h1>
                <div className="chatsList">
                    <div className="chatbox__user--active">
                        <a href="">Chat 1</a>
                    </div>
                    <div className="chatbox__user--busy">
                        <a href="">Chat 2</a>
                    </div>
                    <div className="chatbox__user--active">
                        <a href="">Chat 3</a>
                    </div>
                    <div className="chatbox__user--active">
                        <a href="">Chat 4</a>
                    </div>
                    <div className="chatbox__user--away">
                        <a href="">Chat 5</a>
                    </div>
                    <button className="addChat"><AddCircleOutlineIcon /></button>
                </div>
        </>
    )
}

export default ChatList;
