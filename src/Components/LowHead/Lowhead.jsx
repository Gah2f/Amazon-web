import React from 'react'
import classes from '../Header/Header.module.css'
import { AiOutlineMenu } from "react-icons/ai";
function Lowhead() {
  return (
    <div className={classes.lower_container}>
<ul>
   <AiOutlineMenu/>
   <li>  <p>All</p></li>
    <li>Today's Deal's</li>
    <li>Costumer Service</li>
    <li>Registry</li>
    <li>Gift Cards</li>
    <li>Sell</li>
</ul>
    </div>
  )
}

export default Lowhead