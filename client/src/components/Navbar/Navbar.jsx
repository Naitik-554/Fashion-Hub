import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Cart from '../Cart/Cart';
import {useSelector} from 'react-redux'
// import India from './india.png';

const Navbar = () => {

   const [open, setOpen] = React.useState(false);
   const products = useSelector(state=>state.cart.products)

  return (
    <div className='navbar'>
      <div className="wrapper">
         <div className="left">
            <div className="item">
               <Link className="link" to="/">Homepage</Link>
            </div>
            <div className="item">
               <Link className="link" to="/products/1">Women</Link>
            </div>
            <div className="item">
               <Link className="link" to="/products/2">Men</Link>
            </div>
            <div className="item">
               <Link className="link" to="/products/3">Children</Link>
            </div>
         </div>
         <div className="center">
            <Link className="link" to="/">FASHIONHUB</Link>
         </div>
         <div className="right">
            <div className="item">
               <Link className="link" to="/">About</Link>
            </div>
            <div className="item">
               <Link className="link" to="/">Contact</Link>
            </div>
            <div className="item">
               <Link className="link" to="/">Stores</Link>
            </div>
            <div className="nicons">
               <SearchIcon fontSize="very-small"/>
               <PersonOutlineIcon fontSize="very-small"/>
               <FavoriteBorderIcon fontSize="very-small"/>
               <div className="cartIcon" onClick={()=>setOpen(!open)}>
                  <ShoppingCartIcon fontSize="very-small"/>
                  <span>{products.length}</span>
               </div>
            </div>
         </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar