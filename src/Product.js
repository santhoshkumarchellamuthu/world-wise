import React from 'react'
import "./Product.css"
import Navbar from './Navbar'

const Product = () => {
  return (
    <>
      <Navbar />
      <div className='product'>
        <div className='image'>
          <img src="./image/img-1.jpg"></img>
        </div>
        <div className='head'>
          <h1>About WorldWide.</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga perspiciatis?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi officiis et.</p>
        </div>

      </div >
    </>
  )
}

export default Product