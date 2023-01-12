import React from 'react'
import { Link } from 'react-router-dom'


export default function Navlocker({isOpen, setOpen}) {

  return (
    <div className='position-fixed top-0 h-100 w-100 left-0 navlocker' style={{zIndex: '5'}}>
        <div className='mx-2 text-lg text-white text-uppercase' style={{marginTop: '5rem'}}>
                <Link to='/search' onClick={()=> setOpen(!isOpen)}>
                    <p className='mb-4 ' style={{color:'#a1a1aa'}}>Search</p>
                </Link>
                <Link>
                   <p className='mb-4' style={{color:'#a1a1aa'}}>TV SHOWS</p> 
                </Link>
                <a href='https://wwww.tvmaze.com'className='fw-bold text-uppercase text-white' target='_blank'>Find out more</a>


        </div>

    </div>
  )
}
