import React from 'react'

const AboutCard = ({title, desc, img}) => {
    console.log(img)
  return (
    <div>
        <img src={img} alt="" />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="">{desc}</p>
    </div>
  )
}

export default AboutCard
