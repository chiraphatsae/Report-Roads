import React, { useEffect, useState } from 'react';
///Component
import './sidebar.css'
///Icon
import { MdOutlineSubject, MdOutlineAssignment, MdOutlineBuild, MdOutlinePrint, MdLogin, MdLogout } from 'react-icons/md'
/// Link
import { Link, } from "react-router-dom";

const Sidebar = () => {
    let path = window.location.pathname;
    const logedIn = JSON.parse(localStorage.getItem('persit/Root')) ? JSON.parse(localStorage.getItem('persit/Root')) : ""
    console.log(path)
    const onLogOut = () => {
        localStorage.removeItem("persit/Root")
        document.location.href = "/"
    }
    return (

        <div className='sidebar '>
            <div className="sidebarWrapper mar">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle fw-bold m-0 ">Dashboard </h3>
                    <ul className="sidebarList m-0 ">

                        <li className="sidebarListItem ">
                            <Link to="/"   >
                                <span className={path === '/' ? 'active' : ''}>
                                    <MdOutlineSubject className="sidebarIcon" />
                                    หน้าหลัก
                                </span>
                            </Link>

                        </li>
                    </ul>
                    {logedIn &&
                        <>
                            <h3 className="sidebarTitle fw-bold m-0 ">Menu </h3>
                            <ul className="sidebarList m-0 ">
                                <li className="sidebarListItem ">
                                    <Link to="/">
                                        <MdOutlineAssignment className="sidebarIcon" />
                                        บันทึกการตรวจถนน
                                    </Link>

                                </li>

                                <li className="sidebarListItem">
                                    <MdOutlineBuild className="sidebarIcon" />
                                    แก้ไขรายการบันทึก
                                </li>
                            </ul>
                            <h3 className="sidebarTitle fw-bold m-0 ">Report </h3>
                            <ul className="sidebarList m-0 ">
                                <li className="sidebarListItem ">
                                    <MdOutlinePrint className="sidebarIcon " />
                                    พิมพ์รายการตรวจถนน
                                </li>
                            </ul>
                        </>
                    }
                    <h3 className="sidebarTitle fw-bold m-0 ">Login </h3>
                    <ul className="sidebarList m-0 ">
                        <li className="sidebarListItem ">
                            {
                                logedIn ?
                                    <Link onClick={() => onLogOut()}>
                                        <MdLogout className="sidebarIcon" />Log Out
                                    </Link>
                                    :

                                    <Link to="/auth/login" >
                                        <span className={path === '/auth/login' ? 'active' : ''}>
                                            <MdLogin className="sidebarIcon" />Log In
                                        </span>
                                    </Link>
                            }

                        </li>
                    </ul>
                </div>
                <div className='newProjectButton '> + เพิ่ม / Add New </div>
                <div className='mainCredit mt-3'>road inspection record system</div>
                <div className='secCredit '>© 2021 All Rights Reserved</div>
                <div className="endCredit ">Made by <span className='text-pink'>Chiraphat Worrawiwatmethakul </span></div>
            </div>
        </div>

    )
};

export default Sidebar;
