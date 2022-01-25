import React from 'react';
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
const Sidebar = () => {
    return <div className='sidebar '>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard  </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyleIcon className="sidebarIcon"/>
                        หน้าหลัก
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon" />
                        Sales
                    </li>
                </ul>
                <h3 className="sidebarTitle">Quick Menu  </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <PersonOutlineIcon className="sidebarIcon"/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Inventory2OutlinedIcon className="sidebarIcon"/>
                        Product
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyOutlinedIcon className="sidebarIcon"/>
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <EqualizerRoundedIcon className="sidebarIcon"/>
                        Report
                    </li>
                </ul>
                <h3 className="sidebarTitle">Notifications </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutlineRoundedIcon className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <GradingOutlinedIcon className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ForumOutlinedIcon className="sidebarIcon"/>
                        Messages
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>;
};

export default Sidebar;
