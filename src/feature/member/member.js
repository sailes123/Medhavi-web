import React, { useState } from 'react';
import './member.css';

const Member = ({late,name,date,imageUrl,graded,nobtn,onButtonClick,id}) => {
    let submission = late?"Late submission":"On time";
    console.log("Id",id)
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
        { !nobtn && <div className='right'>
          <button className={ !graded ? 'non-grade':'grade'} onClick={()=>onButtonClick(id)}>{ !graded ? 'Grade':<><p>Graded</p><span>08/10</span></>}</button> 
        </div>}
    </div>
  )
}

export default Member;