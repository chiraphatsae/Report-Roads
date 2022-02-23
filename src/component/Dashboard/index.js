import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import NotLogIn from './NotLogIn';
import Logedin from './Logedin';
import { obj_rpr_host } from '../../config/config'




const Dashboard = () => {
    const [detailList, setDetailList] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await axios.get(obj_rpr_host + '/detail')
        setDetailList(res.data.data)
    }
    console.log(detailList)
    const logedIn = JSON.parse(localStorage.getItem('persit/Root')) ? JSON.parse(localStorage.getItem('persit/Root')) : ""

    return (
        <>
            {
                logedIn ? <Logedin /> : <NotLogIn />
            }
        </>


    )
};

export default Dashboard;