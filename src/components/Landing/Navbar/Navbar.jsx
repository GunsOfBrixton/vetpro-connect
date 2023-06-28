import React, {useState} from 'react';
import style from "./Navbar.module.css"
import logo from '../../../assets/img/logo.png';

function Navbar() {
  const [activePage, setActivePage] = useState('inicio');
  const handlePageClick = (page) => {
    setActivePage(page);
  }

  return (
    <>
    <nav className={style.nav}>
          <a href= "/" className={style.navbar-logo}>
            <img src={logo} className={style.logo} />
          </a>
          <ul className={style.navbar}>
          <li>
            <a href="#inicio" className={activePage === 'inicio' ? 'active' : ''}
              onClick={() => handlePageClick('inicio')} >Inicio</a>
          </li>
          <li>
            <a href="#quienessomos" className={activePage === 'quienessomos' ? 'active' : ''}
              onClick={() => handlePageClick('quienessomos')} >Quiénes somos</a>
          </li>
          <li>
            <a href="#contacto" className={activePage === 'contacto' ? 'active' : ''}
              onClick={() => handlePageClick('contacto')} >Contacto</a>
          </li>
{/*         <li><a className='active' href="/">Inicio</a></li>
            <li><a href="/">Quiénes somos</a></li>
            <li><a href="/">Contacto</a></li> */}
          </ul>
          <div>
          <ul className={style.buttons}> 
            <li><a className={style.ingresar} href="/login">Ingresar</a></li>
            <li><a className={style.registro} href="/registro">Regístrate</a></li>
          </ul>
          </div>
    </nav>
    </>
  )
}

export default Navbar
