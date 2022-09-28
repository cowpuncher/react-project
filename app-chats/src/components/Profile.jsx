import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
import FormChange from "./FormChange";

const Profile = (props) => {
    const exitSite = () => {
        localStorage.removeItem('login');
        window.location.assign('/');
    }

    return (
        <div className="profilePage">            
            <div className="chatbox">
                <div className="profileBlock">
                    <div className="profileWrap">
                        <Link to="/" className="profile">
                            <ReplyIcon />
                        </Link>
                        <Link to="/profile" className="profile">
                            <PersonIcon />
                            {localStorage.getItem('login')}
                        </Link>
                    </div>
                    <button className="exitBtn" onClick={exitSite}>Exit</button>
                </div>
                <FormChange />   
            </div> 
        </div>     
    )
}

export default Profile;