import React from "react";
import { useEffect, useRef, useState } from "react";

const MessageBlock = () => {
    const [message, setMessage] = useState([]);
    const [arrMessage, setArrMessage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [checked,setChecked] = useState(false);

    const inputRef = useRef(null);

    const handleMessage = (e) => {
        if(e.target.value !== '') {
            setMessage(e.target.value);
            setLoading(true)
        } else {
            setLoading(false)
        }
    }
    
    const addMessage = () => {
        if(message.length > 0) {
            setArrMessage([...arrMessage, message]);
            setChecked(true);
            setLoading(false);
            setMessage('');
            inputRef.current.value = null;
        }
    }

    useEffect(() => {
        if(checked) {
            setTimeout(() => {                
                setArrMessage([...arrMessage, 'Сообщение отправлено.']);
                setChecked(false);                
            }, 500);
        }
    }, [arrMessage])

    return (
        <div className="messageBlock">
            <div className="messageList">
            {
                arrMessage.map((item , index) => {
                    return <p className={item != 'Сообщение отправлено.' ? 'message' : 'robot'} key={index}>{item}</p>
                })
            }
            {
                loading ? <p className="loading">печатает...</p> : false 
            }
            </div>
            <form className="formAddMessage" onChange={handleMessage}>
                <input type="text" className="inputAddMessage" ref={inputRef} />
                <button type="button" className="btnAddMessage" onClick={addMessage}>Send</button>
            </form>
        </div>
    )
}

export default MessageBlock;