import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Routes, Route } from 'react-router-dom';

const TopPanel = () => {
    
    const exitSite = () => {
        localStorage.removeItem('login');
        window.location.reload();
    }

    return (
        <div className="topPanel">
            <a href="/profile" className="profile">
                <PersonIcon />
                {localStorage.getItem('login')}
            </a>
            <button className="exitBtn" onClick={exitSite}>Exit</button>
        </div>       
    )
}

export default TopPanel;