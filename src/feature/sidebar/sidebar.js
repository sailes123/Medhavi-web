import React from 'react';
import './sidebar.css';
import { ReactComponent as Attendance } from './../../ui-kit/menuIcon/attendence.svg';
import { ReactComponent as Dashboard } from './../../ui-kit/menuIcon/dashboard.svg';
import { ReactComponent as ClassIcon } from './../../ui-kit/menuIcon/Class.svg';
import { ReactComponent as TestIcon } from './../../ui-kit/menuIcon/test.svg';
import { ReactComponent as ReportIcon } from './../../ui-kit/menuIcon/report.svg';
import { ReactComponent as Discipline } from './../../ui-kit/menuIcon/Discipline.svg';
import { ReactComponent as Doubt } from './../../ui-kit/menuIcon/doubt.svg';
import { ReactComponent as Message } from './../../ui-kit/menuIcon/message-notif.svg';
import { ReactComponent as Calendar } from './../../ui-kit/menuIcon/calendar.svg';
import { ReactComponent as Notifyy } from './../../ui-kit/menuIcon/notify.svg';
import { ReactComponent as Settings } from './../../ui-kit/menuIcon/setting.svg';
import { ReactComponent as Logout } from './../../ui-kit/menuIcon/logout.svg';
import Menu from '../menu/menu';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='upper-part' >
                <div className='logo'>
                    <img src='logo.svg'></img>
                </div>
                <div className='menu-list'>
                    <Menu icon={<Dashboard />} title="Dashboard" />
                    <Menu icon={<ClassIcon />} title="Class" />
                    <Menu icon={<Attendance />} title="Attendance" />
                    <Menu icon={<TestIcon />} title="Test" dropbutton={true} />
                    <Menu icon={<ReportIcon />} title="Reports" dropbutton={true} />
                    <Menu icon={<Discipline />} title="Discipline" />
                    <Menu icon={<Doubt />} title="Doubts" />
                    <Menu icon={<Message />} title="Messages" notification={true} />
                    <Menu icon={<Calendar />} title="Schedule" />
                    <Menu icon={<Notifyy />} title="Notify" />
                </div>
            </div>
            <div className='lower-part'>
                <div className='menu-list' >
                    <Menu icon={<Settings />} title="Settings" notification={true}/>
                    <Menu icon={<Attendance />} title="Log out"/>
                </div>

            </div>
        </div>
    )
}

export default Sidebar