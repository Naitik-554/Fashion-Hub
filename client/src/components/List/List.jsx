import React from 'react'
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.css'

const List = ({subCat, maxPrice, sort, catId}) => {
   
  const {data, loading, error} = useFetch(`http://localhost:1337/api/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
  (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}`
  );

  console.log(sort)

  return (
    <div className='list'>
      {error ? "Error while fetching data" :
      loading ? "Loading Data..." : 
      data?.map((item) => (
         <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List