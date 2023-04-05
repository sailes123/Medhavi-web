import React from 'react';
import './member.css';

const Member = ({late,name,date,imageUrl}) => {
    console.log("hello")
    let submission = late?"Late submission":"On time";
  return (
    <div className='member'>
        <div className='left'>
              <div className='image'>
                <img src={imageUrl}></img>
              </div>
              <div className='info'>
                <p className='name'>{name}</p>
                <p className='date'>{date}</p>
                <p className={late?'late':'ontime'}>{submission}</p>
              </div>
        </div>
        <div className='right'>
            <button>Grade</button>
        </div>
    </div>
  )
}

export default Member;