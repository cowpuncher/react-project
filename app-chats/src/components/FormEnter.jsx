import React from "react";
import { useState, useEffect  } from "react";


const FormEnter = (props) => {
    const admin = {
        login: 'admin',
        password: 'admin'
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [enter, setEnter] = useState(false);

    const handleEnter = (e) => {
        if(e.target.name === 'login') {
          setLogin(e.target.value);
        } else if(e.target.name === 'password') {
          setPassword(e.target.value);
        }
    } 

    const enterApp = (e) => {
        if(admin.login === login && admin.password === password) {
            setEnter(true);
            localStorage.setItem('login', login);
            window.location.reload('/');
          } else {
         alert('Error, enter login: admin, password: admin');
        }
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('enter');
        }, 1500)
    }, [enter]);

    return (
        <div className="enterForm">
            <form className="chatbox" onChange={handleEnter}>
                <input type="text" name="login"  className="input" placeholder="Login"/>
                <input type="password" name="password" className="input" placeholder="Password"/>
                <button className="button" type="button" onClick={enterApp}>Log in</button>
            </form>   
        </div>
    )
}

export default FormEnter;