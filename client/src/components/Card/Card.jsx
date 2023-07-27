import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (

   <Link to={`/product/${item.id}`} className='link'>
      <div className='card'>
         <div className="image">
            {item?.attributes?.isNew && <span>New Arrival</span>}
            <img src={"http://localhost:1337" + item.attributes?.img?.data?.attributes?.url} alt="" className='mainImg'/>
         </div>
         <h2>{item?.attributes.title}</h2>
         <div className="prices">
            <h3 className='old'>₹{item?.attributes?.oldPrice || item?.attributes?.price+200}</h3>
            <h3 className='new'>₹{item?.attributes?.price}</h3>
         </div>
      </div>
   </Link>
  )
}

export default Card