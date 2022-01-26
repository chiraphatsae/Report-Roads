import React from 'react';
import './topbar.css'
import { MdOutlineNotifications, MdOutlineLanguage } from "react-icons/md";
const Topbar = () => {
    const logedIn = JSON.parse(localStorage.getItem('persit/Root')) ? JSON.parse(localStorage.getItem('persit/Root')) : ""
    return (
        <div className='topbar '>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        ระบบบันทึกการตรวจถนน
                    </div>
                    <p className="nameProject m-0 p-0">road inspection record system</p>
                </div>

                <div className="topRight">
                    {
                        logedIn &&
                        <>
                            <div className="topbarIconsContainer">
                                <MdOutlineLanguage />
                                <span className="topIconBadge">2</span>
                            </div>
                            <div className="topbarIconsContainer ">
                                <MdOutlineNotifications />
                                <span className="topIconBadge">2</span>
                            </div>
                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                            <div className="topName ">{logedIn.fname} {logedIn.lname}</div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Topbar;
