import React from "react";
import { useState } from "react";

import ChatList from "./ChatList";
import MessageBlock from "./MessageBlock";
import TopPanel from "./TopPanel";

const MainScreen = (props) => {

    return (
        <div className="mainScreen">
            <MessageBlock />
            <div className="chatbox__user-list">
                <TopPanel />
                <ChatList />
            </div>
        </div>
    )
}

export default MainScreen;