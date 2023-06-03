import React, {useState} from 'react';
import "./Navbar.css"
import {Button} from '../Button/Button';
import logo from '../../assets/img/logo.png';
import xIcon from '../../assets/icons/x.png';
import menuIcon from '../../assets/icons/menu.png';

function Navbar() {
 /*  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
  }

  window.addEventListener ("resize", showButton)
 */
  return (
    <>
    <nav className="nav">
          <a href= "/" className="navbar-logo">
            <img src={logo} className='logo' />
          </a>
          <ul className='navbar'> 
            <li><a className='active' href="/">Inicio</a></li>
            <li><a href="/">Quiénes somos</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
          {/*<a href= "/" className="navbar-logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <img src={click ? xIcon : menuIcon} alt="icon" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href= "/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href= "/quienes-somos" className="nav-links" onClick={closeMobileMenu}>
                Quiénes somos
              </a>
            </li>
            <li>
              <a href= "/contacto" className="nav-links" onClick={closeMobileMenu}>
                Contacto
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign up</Button>} */}
    </nav>
    </>
  )
}

export default Navbar
