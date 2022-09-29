import React from "react";
//Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CloseIcon from '@mui/icons-material/Close';

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
    // Массив названий чатов из localstorage
    let arrChatsStorage = JSON.parse(localStorage.getItem("chats"));
    if(!arrChatsStorage) {
        arrChatsStorage = [];
    }
    
    //Стейт добавления чата в массив
    const [linkChats, setLinkChats] = useState(arrChatsStorage);
    //Стейт имени чата
    const [nameChats, setNameChats] = useState('');
    //Стейт состояния окна добавления чата
    const [popup, setPopup] = useState(false);
    //Булевое значение добавлен чат или нет
    const [addChats, setAddChats] = useState(false);

    const nameField = useRef(null);
    
    const openPopup = () => {
        popup ? setPopup(false) : setPopup(true) ;
    }

    const addNameChats = (e) => {
        setNameChats(e.target.value);
    }

    const addChat = (e) => {
        if( nameChats !== '' ) {            
            setLinkChats([...linkChats, nameChats]);
            setAddChats(true);
        }
    }

    const deleteChat = (e) => {   
        let arr = JSON.parse(localStorage.getItem("chats"));
        const idCurChat = e.currentTarget.dataset.id;
        for (let i = 0; i < arr.length; i++) {
            if(i == idCurChat){
                arr.splice(i, 1);
            }
        }
        localStorage.setItem('chats', JSON.stringify(arr));
        setLinkChats(arr);
    }
   

   
    useEffect(() => {
        setTimeout(() => {
            if(addChats) {
                localStorage.setItem('chats', JSON.stringify(linkChats));
                setAddChats(false);
                openPopup();
                nameField.current.value = null;
            }
        }, 0)
    }, [linkChats]);
    
    return (
        <>               
            <h1>Chat's list</h1>
            <div className="chatsList">
                {
                    linkChats.map((chat, index) => {
                        return (
                            <div className="linkChat" key={index}>
                                <Link to={`/chat/${chat}`}>{index + 1}: {chat}</Link> 
                                <button className="deleteChat" data-id={index}  onClick={(e) => deleteChat(e)}><RemoveCircleIcon /></button>
                            </div>
                        )
                    })
                }
            </div>
            <button className="addChat" onClick={() => openPopup()}><AddCircleOutlineIcon /></button>
            <div className={popup ? 'popupAddChats db' : 'popupAddChats dn'}>
                <form className="formChange" onChange={addNameChats}>
                    <button type="button" className="closeFormAddChat"  onClick={() => openPopup()}><CloseIcon /></button>
                    <input type="text" name="login" ref={nameField}  className="input" placeholder="Input chat's name"/>
                    <button className="button" type="button" onClick={addChat}>Add chat's</button>
                </form>  
            </div>
        </>
    )
}

export default ChatList;
