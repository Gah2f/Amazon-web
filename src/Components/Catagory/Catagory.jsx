import React from 'react'
import { categoryInfos } from './CatagoryFullInfo.js'
import CategoryCard from './CatagoryCard.jsx'
import classes from './catagory.module.css'
function Catagory() {
  return (
    <div className={classes.category_container}>
 {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </div>
  )
}

export default Catagory