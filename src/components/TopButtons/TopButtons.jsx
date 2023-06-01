import React from 'react'

export default function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'Orlando'
    },
    {
      id: 2,
      title: 'New York'
    },
    {
      id: 3,
      title: 'Tokyo'
    },
    {
      id: 4,
      title: 'Sydney'
    },
    {
      id: 5,
      title: 'Paris'
    },
  ]

  return (
    <div className='flex justify-around items-center my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-md font-medium'>{city.title}</button>
      ))}
    </div>
  )
}
