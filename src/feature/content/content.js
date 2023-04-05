import React from 'react';
import './content.css';
import Assignment from '../assignment/assignment';
import List from '../list/list';

const Content = () => {
  return (
    <div className='content'>
        <Assignment/>
        <List/>
    </div>
  )
}

export default Content;