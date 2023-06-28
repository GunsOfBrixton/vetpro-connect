import React from 'react'
import styles from './Registro.module.css';
import logo from '../../../assets/img/logo.png';
import imagen2 from '../../../assets/img/imagen2.jpg';

function Registro() {
  return (
    <>
    <a href= "/"><img src={logo} className={styles.logo} /></a>
    <p className={styles.volver}><a href="/">Volver al Inicio</a> </p>
<div className={styles.registro}>
    <form className={styles.form}>
        <p className={styles.title}>Crear una cuenta</p>
        <p className={styles.message}>Regístrate para tener acceso completo a la plataforma. </p>
        <div className={styles.flex}>
            <label>
                <input required="" placeholder="" type="text" className={styles.input}/>
                <span>Nombre</span>
            </label>

            <label>
                <input required="" placeholder="" type="text" className={styles.input}/>
                <span>Apellido</span>
            </label>
        </div>  
            
        <label>
            <input required="" placeholder="" type="email" className={styles.input}/>
            <span>Correo</span>
        </label> 
        
        <label>
            <input required="" placeholder="" type="password" className={styles.input}/>
            <span>Contraseña</span>
        </label>
        <label>
            <input required="" placeholder="" type="password" className={styles.input}/>
            <span>Confirma contraseña</span>
        </label>
        <button className={styles.submit}> <a href="/admin">¡A cuidar de tus mascotas!</a></button>
        <p className={styles.signin}>Ya tienes una cuenta? <a href="/login">Ingresar</a> </p>
    </form>
    <div >
        <img className={styles.imagen2} src={imagen2} alt="imagen" />
    </div>
</div>

    </>
  )
}

export default Registro
