import React from 'react';
import './menu.css';
import { ReactComponent as Notify } from './../../ui-kit/notification.svg';
import { ReactComponent as DropButton } from './../../ui-kit/chevron-down.svg';

const Menu = ({icon,title, notification,dropbutton}) => {
  return (
    <div className='menu'>
      <div className='menu-icon'>{icon}</div>
      <span>{title}</span> 
      {notification && <div className='notification'>
        <Notify/>
      </div>}
      {dropbutton && <div className='dropbutton'>
        <DropButton/>
      </div>
      }
    </div>
  )
}

export default Menu;