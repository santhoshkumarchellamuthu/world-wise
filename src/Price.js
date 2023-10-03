import React from 'react'
import "./Price.css"
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Price = () => {
  const { id ,name} = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      <div className='price'>
        <div className='head'>
          <h1>{id}</h1>
          <h1>{name}</h1>
          <h1>Simple pricing.</h1>
          <h1>Just $9/month.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>
        </div>
        <div className='images'>
          <img src="./image/img-2.jpg"></img>
        </div>
      </div>
    </>
  )
}

export default Price