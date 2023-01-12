import React from "react";
import { Link } from "react-router-dom";


export default function MediaCard({id, image, genres, name}) {
  return (
    <Link to={`/tvshows/${id}`}>
      <div className="border-bottom-0 rounded-bottom me-4  MediaCard position-relative " style={{width: '80vw', height: '350px'}}>
        <img className='w-100 h-100 rounded-3' src={image.original} alt={name} loading='lazy' />
        <div className='border-bottom-0 rounded-bottom position-absolute bottom-0 left-0 w-100 bg-dark opacity-50' style={{height: '96px', zIndex: '0'}}/>
            <div className='d-flex justify-content-center flex-column position-absolute bottom-0 px-4 w-100 z-3'>
                <h1 className='fs-5 text-light fw-5'>
                    {name}
                </h1>
                <p className='text-light'>{genres.join('  -  ')}</p> 
            </div>
      </div>
    </Link>
  );
}
