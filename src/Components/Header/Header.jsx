import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Lowhead from "../LowHead/Lowhead";
import { DataContext } from '../DataProvider/DataProvider';


const Header = () => {
const [{basket},dispatch]=useContext(DataContext)

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
         <Link to="/">
         <img
                src={'https://pngimg.com/uploads/amazon/amazon_PNG11.png'}
                alt="amazon logo"></img>
         </Link>  
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia </span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          <div className={classes.order_container}>
            <div className={classes.language}>
                <a href=" ">  <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              /></a>
             
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
          <a href=""> 
          <div>
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </div>
          </a>
            <a href=""> 
            <p>returns</p>
            <span>& Orders</span>
            </a>
            <div className={classes.cart}>
              <Link to="/checkoutproducts">
              <BiCart size={35} />
              </Link>
              <span>{basket.length}</span>
            </div>
          </div>
        </div>
      </section>
      <Lowhead/>
    </section>
  );
};

export default Header;