import React from "react";
//Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CloseIcon from '@mui/icons-material/Close';

import { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const ChatList = () => {
    // Массив названий чатов из localstorage
    let arrChatsStorage = JSON.parse(localStorage.getItem("chats"));
    arrChatsStorage ? JSON.parse(localStorage.getItem("chats")) : [];
    //Стейт добавления чата в массив
    const [linkChats, setLinkChats] = useState(arrChatsStorage);
    //Стейт имени чата
    const [nameChats, setNameChats] = useState('');
    //Стейт состояния окна добавления чата
    const [popup, setPopup] = useState(false);
    //Булевое значение добавлен чат или нет
    const [addChats, setAddChats] = useState(false);
    console.log(arrChatsStorage);
    const openPopup = () => {
        popup ? setPopup(false) : setPopup(true) ;
    }

    const addNameChats = (e) => {
        setNameChats(e.target.value);
    }

    const addChat = (e) => {
        if( nameChats != '' ) {            
            setLinkChats([...linkChats, nameChats]);
            setAddChats(true);
        }
    }

    // const deleteChat = (e) => {   
    //     localStorage.removeItem('chats');
    //     for (let i = 0; i < arrChatsStorage.length; i++) {
    //         if(arrChatsStorage[i] != e.currentTarget.dataset.id) {   
    //             addChat()
    //         }          
    //     }
    // }
    // onClick={(e) => deleteChat(e)}

   
    useEffect(() => {
        setTimeout(() => {
            if(addChats) {
                localStorage.setItem('chats', JSON.stringify(linkChats));
                setAddChats(false);
                openPopup();
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
                                <button className="deleteChat" data-id={index} ><RemoveCircleIcon /></button>
                            </div>
                        )
                    })
                }
            </div>
            <button className="addChat" onClick={() => openPopup()}><AddCircleOutlineIcon /></button>
            <div className={popup ? 'popupAddChats db' : 'popupAddChats dn'}>
                <form className="formChange" onChange={addNameChats}>
                    <button type="button" className="closeFormAddChat"  onClick={() => openPopup()}><CloseIcon /></button>
                    <input type="text" name="login"  className="input" placeholder="Input chat's name"/>
                    <button className="button" type="button" onClick={addChat}>Add chat's</button>
                </form>  
            </div>
        </>
    )
}

export default ChatList;
