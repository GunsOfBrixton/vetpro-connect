import React, { useState } from 'react';
import styles from './Admin.module.css';
import Clientes from './Clientes';
import Documentos from './Documentos';
import Login from './Login';
import { login } from '../../Utils';

function Admin() {
  const [seleccionadoCliente, setSeleccionadoCliente] = useState(null);
  const [usuarioLogeado, setUsuarioLogeado] = useState(null);

  const seleccionarCliente = (cliente) => {
    setSeleccionadoCliente(cliente);
  };

  const logearUsuario = (username, password) => {
    login(username, password).then((res) => {
      setUsuarioLogeado(res);
    });
  };

  console.log(usuarioLogeado);

  return !usuarioLogeado 
    ? <Login logearUsuario={logearUsuario}/>
    : <div>
        <div className={styles.navbar}>
            <div className={styles.navbarItem}>Clientes</div>
            <div className={styles.navbarItem}>Documentos</div>
        </div>
        <div className={styles.contenido}>
            <Clientes
              seleccionadoCliente={seleccionadoCliente}
              seleccionarCliente={seleccionarCliente}/>
            {seleccionadoCliente
              && <Documentos
              seleccionadoCliente={seleccionadoCliente}/>}
        </div>
    </div>;
}

export default Admin