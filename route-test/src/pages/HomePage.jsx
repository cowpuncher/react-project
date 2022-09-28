import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <header>
                <Link to={"/"}>Home</Link>
                <Link to={"/chats"}>Authentification</Link>
            </header>
            <div>Home</div>
        </>
    )
}

export default HomePage;