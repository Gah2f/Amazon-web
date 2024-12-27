import React, { useContext } from 'react'
import classes from './Product.module.css'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import { DataContext } from '../DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
function ProductCard({product,flex,renderDesc}) {
    const {image, title, id, rating,price, description }=product;
    const [state, dispatch] = useContext(DataContext);
 
    const addToCart = () => {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: { image, title, id, rating, price, description },
      });
    };
  return (
    <div className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}>
<Link to={ `/products/${id}`}>
<img src={image} alt="" />
</Link>
   

    <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
        <div className={classes.rating}> 
           <Rating value={rating.rate} precision={0.1}/>
           <small>{rating.count}</small>
        </div>
        <div>
            <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
            Add to cart
        </button>
    </div>
    </div>
  )
}

export default ProductCard