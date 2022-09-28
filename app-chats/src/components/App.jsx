import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/profile'} element={<ProfilePage />} />
            <Route path={"/chat/:chatId"} element={<MainPage />} /> 
        </Routes>
    )
}

export default App;
