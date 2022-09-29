import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const TopPanel = () => {
    
    const exitSite = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('chats');
        window.location.assign('/');
    }

    return (
        <div className="topPanel">
            <Link to="/profile" className="profile">
                <PersonIcon />
                {localStorage.getItem('login')}
            </Link>
            <button className="exitBtn" onClick={exitSite}>Exit</button>
        </div>       
    )
}

export default TopPanel;