import React from 'react'
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './FeaturedProducts.css'

const FeaturedProducts = ({type}) => {

   const {data, loading, error} = useFetch(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className='featuredProducts'>
      <div className="fptop">
         <h1>{type} Products</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dolore, aspernatur tempora veniam nulla cupiditate explicabo a aut laboriosam unde est sequi quae omnis minima asperiores error natus, corporis sed?</p>
      </div>
      <div className="fpbottom">
         {error ? "Error while Fetching Data" :
         loading ? "Loading data..." : 
         data.map((item) => (
            <Card item={item} key={item.id}/>
         ))}
      </div>
    </div>
  )
}

export default FeaturedProducts