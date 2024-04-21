import React, { useEffect } from 'react'

const Covid = () => {
    const getCovidData =async()=>{
        try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData)
    }
    catch(err){
      console.log(err)
    }
}
    useEffect(()=>{
        getCovidData();
    }, [])
  return (
    <>
      <h1>Live</h1>
      <h1>Covid-19 CORONAVIRUS TRACKER</h1>
    </>
  )
}

export default Covid
