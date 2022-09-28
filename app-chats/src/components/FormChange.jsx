import React from "react";
import { useState } from "react";


const FormChange = (props) => {
    const [login, setLogin] = useState('');
    const [enter, setEnter] = useState(false);

    const handleEnter = (e) => {
        setLogin(e.target.value);
    } 

    const enterApp = (e) => {
        setEnter(true);
        localStorage.setItem('login', login);
        window.location.assign('/');
    }

    return (
        <>
            <form className="formChange" onChange={handleEnter}>
                <input type="text" name="login"  className="input" placeholder="Login"/>
                <button className="button" type="button" onClick={enterApp}>Log in</button>
            </form>   
        </>
    )
}

export default FormChange;