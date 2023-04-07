import React, { useState } from 'react';
import './list.css';
import { ReactComponent as Search } from './../../ui-kit/search-normal.svg';
import Member from '../member/member';
import PopUp from '../popUp/popUp';

export const members = [
    {
        key: 1,
        imageUrl: "mem1.svg",
        name: "Savannah Nguyen",
        date: "October 25, 2019",
        late: false
    },
    {
        key: 2,
        imageUrl: "mem2.svg",
        name: "Savannah Nguyen",
        date: "October 25, 2019",
        late: true
    },
    {
        key: 3,
        imageUrl: "mem3.svg",
        name: "Savannah Nguyen",
        date: "October 25, 2019",
        late: true
    },
    {
        key: 4,
        imageUrl: "mem4.svg",
        name: "Savannah Nguyen",
        date: "October 25, 2019",
        late: false
    },
    {
        key: 5,
        imageUrl: "mem5.svg",
        name: "Savannah Nguyen",
        date: "October 25, 2019",
        late: false
    },
]

const List = () => {
   const [graded,setGraded] = useState(false);
   const [popUp,setPopUp] = useState(false);
   const [keyValue,setKeyValue] = useState(null);

   const handleButtonClick = (key) =>{
    setPopUp(true);
    setKeyValue(key)
   }

  return (
    <div className='list'>
        <div className='top-part'>
            <div className='btns'>
                <button className={graded?"":'blue-btn'} onClick={()=>{setGraded(false)}}>Not-Graded</button>
                <button className={graded?'blue-btn':""} onClick={()=>{setGraded(true)}}>Graded</button>
            </div>
            <div className='search'>
                <Search/>
                <input placeholder='Search'></input>
            </div>
        </div>
        <div className='bottom-part'>
           {
            members.map((member)=>{
                return(
              <Member 
              id={member.key}
              imageUrl={member.imageUrl}
              name={member.name}
              date= {member.date}
              late={member.late}
              graded={graded}
              onButtonClick = {handleButtonClick}
               />)
            }
            )
           }
        </div>
        { popUp && <PopUp graded={graded} num={keyValue} closePop={()=>setPopUp(false)}/> }
    </div>
  )
}

export default List