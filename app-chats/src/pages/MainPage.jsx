import React from "react";
import FormEnter from '../components/FormEnter';
import MainScreen from '../components/MainScreen';

const MainPage = () => {
    return (
        <div className="App">
          { localStorage.getItem('login') ? <MainScreen />  : <FormEnter />  }         
        </div>
    );
}

export default MainPage;