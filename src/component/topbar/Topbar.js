import React from 'react';
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
    return (
        <div className='topbar '>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        ระบบบันทึกการตรวจถนน
                    </div>
                    <p className="nameProject">road inspection record system</p>
                </div>

                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer ">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <SettingsIcon />

                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
