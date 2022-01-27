import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import NotLogIn from './NotLogIn';



const Dashboard = () => {
    const logedIn = JSON.parse(localStorage.getItem('persit/Root')) ? JSON.parse(localStorage.getItem('persit/Root')) : ""

    return (
        <>
            {
                logedIn ? <div>Log In</div> : <NotLogIn />
            }
        </>


    )
};

export default Dashboard;