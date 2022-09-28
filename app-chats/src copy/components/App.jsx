import './App.css';
import React, { useState } from 'react';
import FormEnter from '../components/FormEnter';
import MainScreen from '../components/MainScreen';

function App() {
  return (
    <div className="App">
      { localStorage.getItem('login') ? <MainScreen />  : <FormEnter />  }         
    </div>
  );
}

export default App;
