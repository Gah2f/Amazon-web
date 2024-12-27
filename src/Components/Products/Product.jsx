import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import classes from './Product.module.css'
import Loader from '../../Components/Loader/Loader'

const Product = () => {
const [products, setProducts] = useState();
const [isloading,setIsloading]=useState(false);
 useEffect (() =>{
setIsloading(true)
axios.get('https://fakestoreapi.com/products')
.then((res)=>{
setProducts(res.data)
setIsloading(false)
}).catch((err) =>{
console.log (err);})
setIsloading(false)
},[])
return (
  <>
    {isloading ? (
      <Loader />
    ) : (
      <section className={classes.products_container}>
        {products?.map((singleProduct) => {
          return (
            <ProductCard
              product={singleProduct}
              renderAdd={true}
              key={singleProduct.id}
            />
          );
        })}
      </section>
    )}
  </>
);  
}

export default Product;