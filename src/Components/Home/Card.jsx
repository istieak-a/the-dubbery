import React from 'react'

const Card = ({title, desc}) => {
  return (
    <div className="flex flex-col w-[300px] bg-red-400 justify-center items-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-center">{desc}</p>
    </div>
  )
}

export default Card
