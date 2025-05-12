import React from 'react'
import { Link } from 'react-router-dom'
import './MaleDaemateba.css'

const MaleDaemateba:React.FC = () => {
  return (
    <div className='MaleDaemateba-div'>
      <h1 className='MaleDaemateba-h1'>მოცემული გვერდი მალე დაემატება</h1>
      <Link to={"/ნაწარმოებანი"}><button className='MaleDaemateba-btn'>უკან დაბრუნება</button></Link>
    </div>
  )
}

export default MaleDaemateba
