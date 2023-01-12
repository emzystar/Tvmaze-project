import React from 'react'
import { Container } from 'react-bootstrap'

export default function HeroProduct() {
  return (
    <div className='p-5 first'>
      <Container className='d-flex w-100 top-0  justify-content-center'>
            <div className='mt-7 p-5 gap-5 text-center mx-auto align-items-center '>
                    <h3>MUST SEE TV SHOWS, NOW STREAMING</h3>
                    <h6>view thousands of shows and see details about your favorite tv shows and people.</h6>
                    <button className='px-4 py-2 button'>FIND OUT MORE</button>
            </div>
        </Container>
    </div>
  )
}
