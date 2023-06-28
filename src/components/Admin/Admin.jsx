import React, { useState } from 'react';
import styles from './Admin.module.css';
import Clientes from './Clientes';
import Documentos from './Documentos';
import Login from './Login';
import { login } from '../../Utils';
import logo from '../../assets/img/logo.png';
import Adminav from './Adminav/Adminav';
import Ficha from './Ficha/Ficha';

function Admin() {
  const [seleccionadoCliente, setSeleccionadoCliente] = useState(null);
  const [usuarioLogeado, setUsuarioLogeado] = useState(null);
  const [seleccion, setSeleccion] = useState('documentos'); // Estado para controlar la selección de los botones

  const seleccionarCliente = (cliente) => {
    setSeleccionadoCliente(cliente);
  };

  const logearUsuario = (username, password) => {
    login(username, password).then((res) => {
      setUsuarioLogeado(res);
    });
  };

  console.log(usuarioLogeado);
  return (
    <div>
      <Adminav />
      <div className={styles.radioInputs}>
        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            checked={seleccion === 'documentos'}
            onChange={() => setSeleccion('documentos')}
          />
          <span className={styles.name}>Asignar documento</span>
        </label>
        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            checked={seleccion === 'ficha'}
            onChange={() => setSeleccion('ficha')}
          />
          <span className={styles.name}>Ficha Clínica</span>
        </label>
      </div>
      <div className={styles.contenido}>
        {seleccion === 'documentos' && (
          <>
            <Clientes
              seleccionadoCliente={seleccionadoCliente}
              seleccionarCliente={seleccionarCliente}
            />
            {seleccionadoCliente && (
              <Documentos seleccionadoCliente={seleccionadoCliente} />
            )}
          </>
        )}
        {seleccion === 'ficha' && <Ficha />}
      </div>
    </div>
  );
}

export default Admin;
