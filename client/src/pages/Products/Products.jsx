import React from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.css'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = React.useState(1500)
  const [sort, setSort] = React.useState(null)
  const [selectedSubCat, setSelectedSubCat] = React.useState([])

  const {data, loading, error} = useFetch(`http://localhost:1337/api/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item !== value))
  }
  
  return (
    <div className='products'>
      <div className="pleft">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1500} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')} />
            <label htmlFor="asc">Price (Lowest First) </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort('desc')} />
            <label htmlFor="desc">Price (Highest First) </label>
          </div>
        </div>
      </div>
      <div className="pright">
        <img className='catImg' src="https://wallpapercave.com/wp/wp9304460.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat}/>
      </div>
    </div>
  )
}

export default Products