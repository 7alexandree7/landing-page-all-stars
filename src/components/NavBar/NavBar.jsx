import React from 'react'
import NavBarMenu from './definitions'
import Logo from '../../assets/logox.svg'
import './NavBar.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingBag, MdMenu } from 'react-icons/md'

export default function NavBar() {
  return (
    <nav className='navBar'>
      <div className='navBar-container'>
        <div className="navBar-logo">
          <img src={Logo} alt="logo da allstar" className='logo-img' />
        </div>
        <ul className='navBar-menu'>
          {NavBarMenu.map((item) => (
            <li className='navBar-item' key={item.id}><a className='navBar-link' href={item.link}>{item.title}</a></li>
          ))}
        </ul>
        <div className="navBar-icons">
          <div className="icon user-icon">
            <FaRegUserCircle />
          </div>
          <div className="icon cart-icon">
            <MdOutlineShoppingBag />
            <div className="cart-counter">2</div>
          </div>
          <div className="moblie">
            <MdMenu className='hamburguer-icon' />
          </div>
        </div>
      </div>
    </nav>
  )
}
