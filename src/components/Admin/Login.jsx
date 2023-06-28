import React, {useState, useEffect} from 'react'
import styles from './Login.module.css';
import logo from '../../assets/img/logo.png';
import imagen from '../../assets/img/imagen6.jpg';

function Login({ logearUsuario }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
  <>
    <a href= "/"><img src={logo} className={styles.logo} /></a>
    <p className={styles.volver}><a href="/">Volver al Inicio</a> </p>
    <div className={styles.registro}>
      <form className={styles.form}>
        <p className={styles.title}>Ingresar</p>
        <p className={styles.message}>Bienvenido/a de vuelta!</p>
        <label htmlFor="username">
          <input required="" placeholder="" type="text" className={styles.input} onChange={(e) => setUsername(e.target.value)} name="username" id="username"/>
          <span>Correo</span>
        </label>          
        <label htmlFor="password">
          <input required="" type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" className={styles.input} />
          <span>Contraseña</span>
        </label>
        <button className={styles.submit}> <a href="/admin" type='button' onClick={() => logearUsuario(username, password)}>Ingresar</a></button>
        <p className={styles.signin}>No tienes una cuenta? <a href="/registro">Regístrate</a> </p>
      </form>
    <div >
        <img className={styles.imagen5} src={imagen} alt="imagen" />
      </div>
    </div>

</>
  )
}

export default Login

