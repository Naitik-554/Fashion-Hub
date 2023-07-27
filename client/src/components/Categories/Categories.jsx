import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/4247817/pexels-photo-4247817.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              New Arrivals
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories