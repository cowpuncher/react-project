import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import FormEnter from '../components/FormEnter';
import MainScreen from '../components/MainScreen';

//<div className="App">
//    { localStorage.getItem('login') ? <MainScreen />  : <FormEnter />  }         
//</div>

function App() {
  return (
    <div className="App">
      { localStorage.getItem('login') ? <MainScreen />  : <FormEnter />  }         
    </div>
  );
}

export default App;
