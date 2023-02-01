import React from 'react'
import '../Navbar/Navbar.css'
import logo1 from '../assets/flipkart-plus_8d85f4.png'
import logo2 from '../assets/plus_aef861.png'
import { FiSearch } from 'react-icons/fi';
import {MdKeyboardArrowDown} from 'react-icons/md'
import {BsCart3} from 'react-icons/bs'

const Navbar = () => {
    

  return (
    <>
<div className="nav__container">
    <div className="nav__logo">
        <div className="nav__logo1">
        <img src={logo1} alt="/" />
        </div>
        <div className="nav__logo2">
            <h5>Explore</h5>
            <div className="nav__logo_2">
            <p>Plus</p>
            <div className="nav__logo_icon">
            <img src={logo2} alt="/" />
            </div>
            </div>
        </div>
    </div>

    <div className="nav__search">
        <input type="text" placeholder='Search for products, brands and more' 
        style={{
            outline:"none"
        }}/>
        <div className="nav__search__icon">
        <FiSearch/>
        </div>
    </div>

    <button>Login</button>

    <div className="nav__list">
        <ul
        style={{
            cursor:"pointer"
        }}>Become a Seller</ul>
        <ul
         style={{
            cursor:"pointer"
        }}>More<MdKeyboardArrowDown/></ul>
        <ul
         style={{
            cursor:"pointer"
        }}><BsCart3/>Cart</ul>
    </div>
</div>
    </>
  )
}

export default Navbar