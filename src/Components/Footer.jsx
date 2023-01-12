import React from 'react'
import {FaFacebookF, FaInstagramSquare, FaPinterestSquare} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

export default function Footer() {


   
  return (
    <div className=" mx-auto mt-5 foot">
        <div className="d-flex mx-5 mt-4 g-5 foot1 py-3">
        <a className='fw-bold ms-5' href='http://www.tvmaze.com' rel='noreferrer' target='_blank' style={{color:'black', gap:'5px', padding:'5px', fontSize:'1.3rem'}}>
         <FaFacebookF/></a>
         <a className='fw-bold' href='http://www.tvmaze.com' rel='noreferrer' target='_blank' style={{color:'black', gap:'5px', padding:'5px',fontSize:'1.3rem'}}>
         <ImTwitter/></a>
         <a className='fw-bold' href='http://www.tvmaze.com' rel='noreferrer' target='_blank' style={{color:'black', gap:'5px', padding:'5px',fontSize:'1.3rem'}}>
         <FaInstagramSquare/></a>
         <a className='fw-bold' href='http://www.tvmaze.com' rel='noreferrer' target='_blank' style={{color:'black', gap:'5px', padding:'5px',fontSize:'1.3rem'}}>
         <FaPinterestSquare/></a>
        </div>
        <div className='d-flex justify-content-between mx-5 mt-4 align-items-center'>
            <div className='mx-5 d-flex gap-1 '> 
                <AiOutlineCopyrightCircle/>
                <h6 className=''>TVmaze.com</h6>
                </div>
            <div className='d-flex gap-3 mt-1'>
           <><p>COOKIES SETTING</p></>
           <><p>PRIVACY POLICY</p></>
           <><p>RETURNS</p></>
           <><p>FEATURES</p></>
            </div>
        </div>
        
        </div>
  )
}
