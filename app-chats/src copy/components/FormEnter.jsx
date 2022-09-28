import React from "react";
import { useState } from "react";


const FormEnter = (props) => {
    const [login, setLogin] = useState('');
    const [enter, setEnter] = useState(false);

    const handleEnter = (e) => {
        setLogin(e.target.value);
    } 

    const enterApp = (e) => {
        setEnter(true);
        localStorage.setItem('login', login);
        window.location.reload('/');
    }

    return (
        <div className="enterForm">
            <form className="chatbox" onChange={handleEnter}>
                <input type="text" name="login"  className="input" placeholder="Login"/>
                <button className="button" type="button" onClick={enterApp}>Log in</button>
            </form>   
        </div>
    )
}

export default FormEnter;