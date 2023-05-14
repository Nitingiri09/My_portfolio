import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'
import { Link} from 'react-scroll'
import './navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
      <>
        <div className='header'>
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#000' }} />)
                        : (<FaBars size={40} style={{ color: '#000' }} />)}
                </div>
              
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <span className='nav-item'>
                        <Link to="Home" spy={true} smooth={true} offset={-100} duration={80} onClick={closeMenu}>Home</Link>
                    </span>
                    <span className='nav-item'>
                    <Link to="About" spy={true} smooth={true} offset={-10} duration={80} onClick={closeMenu}>About</Link>
                    </span>
                    <span className='nav-item'>
                    <Link to="Skills" spy={true} smooth={true} offset={-20} duration={80} onClick={closeMenu}>Skills</Link>
                    </span>
                    <span className='nav-item'>
                    <Link to="Contact" spy={true} smooth={true} offset={10} duration={80} onClick={closeMenu}>Contact</Link>
                    </span>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar



