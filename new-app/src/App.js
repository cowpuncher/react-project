import React, { useState, useEffect } from 'react';
import './App.css';
import HelloText from './HelloText';
import FormReg from "./FormReg";
import Message from "./Message";


function App(props) {

    // Коллекция стейтов
    let [name, setName] = useState('Hi Dude! What\'s your name?');
    let [input, setInput] = useState('');
    let [elem, setElem] = useState('db');
    let [message, setMessage] = useState('');
    let [messageList, setMessageList] = useState([]);
    let [messageAdd, setMessageAdd] = useState(false);
    // Переменные
    let newMessage = {};

    // Изменение состояния инпута с Именем
    const handleChange = (event) => {
        setInput(input = event.target.value);
    };

    // Добавляем имя, проверяем ввод, скрываем форму
    const addName = () => {
        if(input !== '') {
            setElem(elem = 'dn');
            setName(name = input);
        } else {
            setName(name = 'Please, input your name.');
        }
    };


    // Добавляем сообщение
    const addMessage = (mess, name) => {
        if(mess !== '') {
            newMessage = {
                name: name,
                text: mess
            };
            setMessageList([...messageList, newMessage]);
            setMessageAdd(true);
        }
        setMessage(message = '');

    };

    const robotMessage = () => {
       if(messageAdd) {
            setMessageList([...messageList, {
                title: 'Robot',
                text: "Thank's"
            }]);
            setMessageAdd(false);
       }
    };

    const robotText = (count) => {
        return 'Thanks ' + count;
    };

    useEffect(() => {
        setTimeout(() => {
            robotMessage();
        }, 1500)
    }, [messageList]);

    return (
        <div className="App">
            <FormReg elem={elem} input={input} handleChange={handleChange} addName={addName}/>
            <header className="App-header">
                {name === input ? (
                    <div className="messagesList">
                        <h1 className="product-sold-out">Welcome, {name}</h1>
                        <div className="formMessage">
                            <form>
                                <textarea value={message} onChange={(event)=>setMessage(message = event.target.value)}/>
                                <button type="button" onClick={() => addMessage(message, name)} >Send</button>
                            </form>
                        </div>
                        {
                            messageList.map((item , index) => {
                                return <Message key={index} name={item.name} message={item.text} id={index}/>
                            })
                        }
                        {
                            robotText(messageList.length)
                        }

                    </div>
                ) : (
                    <HelloText hello={name} message={messageList} />
                )}
            </header>
        </div>
    );
}

export default App;
