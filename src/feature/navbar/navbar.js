import React from 'react';
import { ReactComponent as LeftArrow } from './../../ui-kit/arrow-left.svg';
import { ReactComponent as Notification } from './../../ui-kit/notifications.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='backward'>
         <LeftArrow/>
         <p>Assignments / Lorem ipsum dolor sit</p>
        </div>
        <div className='user-profile'>
             <Notification/>
             <img src='user-pic.svg' alt='user picture'/>
        </div>
    </div>
  )
}

export default Navbar