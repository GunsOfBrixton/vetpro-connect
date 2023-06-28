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
        <h2>Listado Clientes/Mascotas</h2>
        <table>
          <thead>
            <tr>
              <th className={styles.tabletitle}>Cliente</th>
              <th className={styles.tabletitle}>Mascota</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {clientes.map((cliente, i) => (
              <tr className={seleccionadoCliente?.id == cliente.id
                ? styles.rowClienteSeleccionado
                : ''}
                onClick={() => seleccionarCliente(cliente)} key={i}>
                <td className={styles.cliente}>{cliente.cliente}</td>
                <td className={styles.mascota}>{cliente.mascota}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Clientes