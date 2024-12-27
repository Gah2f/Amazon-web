import React, { useContext } from 'react'
import LayOut from '../../Components/Layout/LayOut'
import ProductCard from '../../Components/Products/ProductCard'
import { DataContext } from '../../Components/DataProvider/DataProvider'
// import classes from './CheckoutProducts.module.css'
function CheckoutProducts() {
  const[{basket},dispatch]=useContext(DataContext)
  return (
    <div >
      <div> 
      <LayOut>
<h2>Hello</h2>
<h3>Your Shopping Basket</h3>
<hr />
{
  basket?.length==0? (<h1>OOPS, No Shopping Product Found.</h1>) : (basket?.map((item,i)=>{
    key={i}
    return <ProductCard
    product={item}
    flex={true}
    renderDesc={true}
    />
  }))
}
        </LayOut>
      </div>
       
    </div>
  )
}

export default CheckoutProducts