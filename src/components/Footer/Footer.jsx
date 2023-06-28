import React from 'react'
import style from './Footer.module.css';
import logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <>
    <div className= {style.footer}>
        <a href= "/" className={style.navbar-logo}>
            <img src={logo} className={style.logo} />
        </a>
        <div className={style.footerbox}>
            <h3 className={style.subtitle}>Vet Pro</h3>
            <h5 className={style.parr}>Av. Los Alpes #322, Rancagua</h5>
            <h5 className={style.parr}>+5694174188</h5>
            <h5 className={style.parr}>contacto@vetpro.com</h5>
        </div>
        <div className={style.footerbox}>
            <h3 className={style.subtitle}>Social</h3>
            <h5 className={style.parr}>Mundo Vet Pro</h5>
            <h5 className={style.parr}>Instagram</h5>
            <h5 className={style.parr}>Facebook</h5>
        </div>
        <div className={style.footerboxsuscribe}>
            <h3 className={style.subtitle}>Suscríbete a mundo VetPro</h3>
            <p className={style.parr}>Recibe ofertas y oportunidades increíbles</p>
            <div className={style.inputgroup}>
                <input type="email" className={style.input} id="Email" name="Email" placeholder="tucorreo@ejemplo.com" autoComplete="off" />
                <input className={style.buttonsubmit} value="Subscribirse" type="submit" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer