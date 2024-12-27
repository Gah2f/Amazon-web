import React, { useEffect, useState } from "react";
import LayOut from '../../Components/Layout/LayOut';
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Products/ProductCard";

import Loader from "../../Components/Loader/Loader";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
    
        <ProductCard
        product={product}
        flex={true}
        renderDesc={true}
      />
      )}
    </LayOut>
  );
};

export default ProductDetail;