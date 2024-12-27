import React from 'react'
import LayOut from '../../Components/Layout/Layout'
import CaroEfffect from '../../Components/Carousel/CaroEffect'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Products/Product'

function Landing() {
  return (
    <div>
        <LayOut>
            <CaroEfffect/>
            <Catagory/>      
           <Product/>
        </LayOut>
    </div>
  )
}

export default Landing