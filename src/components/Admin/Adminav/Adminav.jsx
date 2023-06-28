import React, {useState} from 'react';
import style from "./Adminav.module.css";
import logo from '../../../assets/img/logo.png';
import bell from '../../../assets/icons/bell.png';
import profile1 from '../../../assets/icons/profile1.svg'

function Adminav() {

    return (
    <>
    <nav className={style.nav}>
        <a href= "/admin"><img src={logo} className={style.logo} /></a>
        <ul className={style.navbar}>
          <li><a href="/admin" className={style.inactive}>Resumen</a></li>
          <li><a href="/admin" className={style.inactive}>Agendas</a></li>
          <li><a href="/admin" className={style.inactive}>Clientes/Mascotas</a></li>
          <li><a href="/admin" className={style.active}>Documentos</a></li>
          <li><a href="/admin" className={style.inactive}>Solicitudes/Chats</a></li>
        </ul>
        <input className={style.input} name="text" placeholder="Buscar" type="search"></input>
        <a href= "/admin"> <img src={profile1} className={style.profile} alt="Profile" /> </a>
    </nav>
 {/*       <div className= {style.user}>
          <a href= "/admin"> <img src={bell} className={style.bell} /></a>
          <a href= "/admin"> <img src={profile1} className={style.profile} /></a>
          <a href="/admin" className={style.username}>Username</a>
        </div> */}
    </>
  )
}

export default Adminav