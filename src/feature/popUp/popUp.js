import React, { useEffect, useState } from 'react';
import './popUp.css';
import { members } from '../list/list';
import Member from '../member/member';
import PdfDownload from '../pdfDownload/pdfDownload';
import { ReactComponent as CloseButton } from './../../ui-kit/closebutton.svg';

const PopUp = ({ graded,num,closePop }) => {
   const [grade,setGrade] = useState('');
   useEffect(()=>{
if(graded){
    setGrade("08");
   }
   },[])
   

  return (
    <div className='popUp'>
      <div className='backcolor'></div>
      <div className='container'>
        <div className='top-title'>
          <h3>Student Submission</h3>
          <CloseButton onClick={()=>closePop()}/>
        </div>
        <div className='bottom-part'>
          <Member
            imageUrl={members[num-1].imageUrl}
            name={members[num-1].name}
            date={members[num-1].date}
            late={members[num-1].late}
            nobtn={true}
          />
          <div className='file-section'>
            <p className='sub-title'>Submitted files</p>
            <div className='pdf-file'>
              <PdfDownload desc={"Evolution of human being."} />
              <PdfDownload desc={"Evolution exercise 1."} />
            </div>
          </div>
          <div className='comment-section'>
            <p className='sub-title'>Student comment</p>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin at sem. Diam nisl in morbi id diam felis. Lectus eget sit tristique sit magnis pretium nec. Mus fermentum consequat nisl volutpat viverra ut at. Lorem tristique dolor cursus euismod mus duis. Etiam aliquam ultrices tristique in ipsum congue. Nisl aenean netus lobortis ut amet. Lacus eleifend urna turpis amet mattis lacus. Dui elementum ac vitae quam ullamcorper nunc.</p>
          </div>
          <div className='grade-obtained'>
            <p className='sub-title'>Grade obtained.</p>
            <div className='total-grade'>
              
              <input value={grade} className='grade' placeholder='Enter grade here' onChange={(e)=>setGrade(e.target.value)} ></input>
              <div className='total'>
                <p>out of 10</p>
              </div>
            </div>
          </div>
          <div className='extra-comment'>
            <textarea  placeholder='Enter your suggestion or comment here.'>{graded?"Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin at sem. Diam nisl in morbi id diam felis. Lectus eget sit tristique sit magnis pretium nec. Mus fermentum consequat nisl volutpat viverra ut at. Lorem tristique dolor cursus euismod mus duis. Etiam aliquam ultrices tristique in ipsum congue. Nisl aenean netus lobortis ut amet. Lacus eleifend urna turpis amet mattis lacus. Dui elementum ac vitae quam ullamcorper nunc.":""}</textarea>
            <div className='last-btn'>
              <p>Ask for resubmission</p>
              <button>{graded?"Edit Grade":"Grade"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp;
