import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='Footer'>
      All Copy Rights reserved by @kavi 2023

      <div >
        <AiFillFacebook style={{ marginRight: "20px" }} />
        <AiFillTwitterCircle style={{ marginRight: "20px" }} />
        <AiFillInstagram />
      </div>

    </div>
  )
}

export default Footer

