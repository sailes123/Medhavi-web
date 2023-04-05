import React from 'react';
import './pdfDownload.css';
import { ReactComponent as Downloader } from './../../ui-kit/downloadbtn.svg';

const PdfDownload = () => {
  return (
    <div className='pdf'>
        <div className='pdf-details'>
            <div className='power-point'>
                <img src='powerp.svg'></img>
            </div>

            <div className='pdf-desc'>
                <p>Evolution chapter notes.</p>
                <span>32.5 MB</span>
            </div>
        </div>
        <Downloader/>
    </div>
  )
}

export default PdfDownload;