import React from 'react';
import './list.css';
import { ReactComponent as Search } from './../../ui-kit/search-normal.svg';
import Member from '../member/member';

const List = () => {
    const members = [
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

  return (
    <div className='list'>
        <div className='top-part'>
            <div className='btns'>
                <button className='blue-btn'>Not-Graded</button>
                <button>Graded</button>
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
              imageUrl={member.imageUrl}
              name={member.name}
              date= {member.date}
              late={member.late}
               />)
            }

            )
           }
        </div>
    </div>
  )
}

export default List