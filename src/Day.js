import React from 'react'

const Day = () => {
  let title = 'Avengers';
  let year = '2018'
  let runtime = '215 min';
  let poster = "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810";

  return (

    <div className='m-10 px-5 pt-2 shadow-2xl w-[315px] bg-[gray] rounded-lg'>

      <img src={poster} alt="Avengers" />

      <h2 className='text-3xl my-2'>{title}</h2>

      <p className='my-2 text-xl'>Year:{year}</p>

      <p className='text-xl'>Runtime:{runtime}</p>

    </div>
  )
}

export default Day
