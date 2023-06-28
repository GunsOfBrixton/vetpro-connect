import React, {useState} from 'react';
import style from "./Usernav.module.css";
import logo from '../../../assets/img/logo.png';
import bell from '../../../assets/icons/bell.svg';
import profile1 from '../../../assets/icons/profile1.svg'

function Usernav() {

    return (
    <>
    <nav className={style.nav}>
        <a href= "/user"><img src={logo} className={style.logo} /></a>
        <ul className={style.navbar}>
          <li><a href="/user" className={style.inactive}>Inicio</a></li>
          <li><a href="/user" className={style.active}>Agenda</a></li>
          <li><a href="/user" className={style.inactive}>Perfil/Mascotas</a></li>
          <li><a href="/user" className={style.inactive}>Documentos</a></li>
          <li><a href="/user" className={style.inactive}>Pagos</a></li>
          <li><a href="/user" className={style.inactive}>Chats</a></li>
        </ul>
        <input className={style.input} name="text" placeholder="Buscar" type="search"></input>
        <div className={style.userbox}>
          <a href= "/admin"> <img src={bell} className={style.bell} /></a>
          <a href= "/user"> <img src={profile1} className={style.profile} alt="Profile" /> </a>
          <span href="/admin" className={style.username}>Username</span>
        </div>
       
        
    </nav>
     {/*       <div className= {style.user}>
          <a href= "/admin"> <img src={bell} className={style.bell} /></a>
          <a href= "/admin"> <img src={profile1} className={style.profile} /></a>
          <a href="/admin" className={style.username}>Username</a>
        </div> */}
    </>
  )
}

export default Usernav