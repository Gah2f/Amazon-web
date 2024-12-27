import React from 'react'
import classes from './Carousel.module.css'
import { Carousel } from "react-responsive-carousel";
import {img} from './imgs/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CaroEfffect() {
  return (
    <div>
<Carousel
autoPlay={true}
infiniteLoop={true}
showIndicators={false}
showThumbs={false}
showStatus={false}
showArrows={false}
>
{
  img.map((imageItemLink)=>{
    return <img src={imageItemLink}/>
  })
}

</Carousel>
<div className={classes.hero_img}></div>
    </div>
  )
}

export default CaroEfffect