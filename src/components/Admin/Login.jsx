import React, {useState, useEffect} from 'react'

function Login({ logearUsuario }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div>Login</div>
    <form>
      <label htmlFor="username">Correo</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" id="username"/>
      <label htmlFor="password">Contraseña</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password"/>
      <button type='button' onClick={() => logearUsuario(username, password)}>Logearse</button>
    </form>
    </>
  )
}

export default Login