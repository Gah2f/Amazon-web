import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { productUrl } from '../../API/endPoints'
import {useParams} from 'react-router-dom'
import LayOut from '../../Components/Layout/Layout';
import classes from './Result.module.css'
import ProductCard from '../../Components/Products/ProductCard';
import Loader from '../../Components/Loader/Loader';
function Result() {
    const [results, setResult]=useState();
    const [isloading, setIsloading]=useState(false);
    const {categoryName} = useParams();
    useEffect(()=>{
      setIsloading(true)
        axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res)=>{
            setResult(res.data)
      setIsloading(false)
        }) .catch((err)=>{
            console.log(err);
      setIsloading(false)
        })
    },[])
  return (
    <LayOut> 
      {isloading? (<Loader/>) : (<div>
 <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product}  />
            ))}
          </div>
    </div>)}
 
    </LayOut>

   
  )
}

export default Result