import React, {useState, useEffect} from 'react'
import { consultarClientes } from '../../Utils'; 
import styles from './Admin.module.css';

function Clientes({ seleccionadoCliente, seleccionarCliente }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    consultarClientes().then((res) => {
      setClientes(res);
    });
  }, []);

  return (
    <div className={styles.clientesContainer}>
        <h1>Clientes</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Cliente</th>
              <th>Mascota</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, i) => (
              <tr className={seleccionadoCliente?.id == cliente.id
                ? styles.rowClienteSeleccionado
                : ''}
                onClick={() => seleccionarCliente(cliente)} key={i}>
                <td>{cliente.foto}</td>
                <td>{cliente.cliente}</td>
                <td>{cliente.mascota}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Clientes