import React from 'react'
import HeroProduct from '../Components/HeroProduct'
import Heropage from '../Components/Heropage'
import useFetch from '../Components/hooks/useFetch'


export default function Home() {
    const { data, error, loading } = useFetch(
        "https://api.tvmaze.com/shows?page=1"
      )
      console.log(data)
  return (
    <>
        <HeroProduct/>
        
        <Heropage data={data} error={error} loading={loading}/>
        
        
       
    </>
  )
}
