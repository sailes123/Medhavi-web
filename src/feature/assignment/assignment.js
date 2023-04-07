import React from 'react';
import { ReactComponent as Avatar } from './../../ui-kit/realavatar.svg';
import { ReactComponent as AvatarGroup } from './../../ui-kit/avatarGroup.svg';
import { ReactComponent as Remained } from './../../ui-kit/remained.svg';
import './assignment.css';
import PdfDownload from '../pdfDownload/pdfDownload';

const Assignment = () => {
  return (
    <div className='assignment'>
        <div className='heading'>
            <div className='mainpart'>
           <div className='main-avatar'>
            <p>Sc</p>
           </div>
           <div className='details'>
            <div className='top-details'>
                <p>Lorem ipsum dolor sit amet consectetur. Scelerisque aenean nibh.</p>
            </div>
            <div className='bottom-details'>
                 <div className='submit'>
                    <p>Submitted by:</p>
                    <AvatarGroup/>
                 </div>
                 <div className='assigned'>
                 <p>Assigned On:</p>
                 <span>14 Apr 2021, 8:43 PM</span>
                 </div>
            </div>
           </div>
          </div>
          <div className='remained'>
            <Remained/>
          </div>
        </div>
        <div className='description'>
            <p>Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin at sem. Diam nisl in morbi id diam felis. Lectus eget sit tristique sit magnis pretium nec. Mus fermentum consequat nisl volutpat viverra ut at. Lorem tristique dolor cursus euismod mus duis. Etiam aliquam ultrices tristique in ipsum congue. Nisl aenean netus lobortis ut amet. Lacus eleifend urna turpis amet mattis lacus. Dui elementum ac vitae quam ullamcorper nunc.</p>
        </div>
        <PdfDownload desc={"Exolution chapter notes."}/>
    </div>
  )
}

export default Assignment