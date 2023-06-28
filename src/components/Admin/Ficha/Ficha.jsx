import React, { useState } from 'react';
import Clientes from '../Clientes';
import styles from './Ficha.module.css';
import download from '../../../assets/icons/download.svg';
import Formularioficha from '../Formulario/Formularioficha';

function Ficha() {
  const [seleccionadoCliente, setSeleccionadoCliente] = useState(null);
  const [filaSeleccionada, setFilaSeleccionada] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const seleccionarCliente = (cliente) => {
    setSeleccionadoCliente(cliente);
  };

  const seleccionarFila = (indice) => {
    setFilaSeleccionada(indice);
    setMostrarFormulario(false);
  };

  const mostrarFormularioHandler = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className={styles.contenido}>
      <>
        <Clientes
          seleccionadoCliente={seleccionadoCliente}
          seleccionarCliente={seleccionarCliente}
        />
        {seleccionadoCliente && (
          <div className={styles.fichasContainer}>
            <h2>Historial Clínico</h2>
            <table>
              <thead>
                <tr>
                  <th className={styles.tabletitle}>Fecha consulta</th>
                  <th className={styles.tabletitle}>Acciones</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                <tr
                  className={filaSeleccionada === 0 ? styles.filaSeleccionada : ''}
                  onClick={() => seleccionarFila(0)}
                >
                  <td className={styles.documento}>15/05/2023</td>
                  <td className={styles.acciones}>
                    <a href="ruta_al_archivo" rel="noreferrer" target="_blank">
                      <img src={download} className={styles.download} alt="Descargar" />
                    </a>
                  </td>
                </tr>
                <tr
                  className={filaSeleccionada === 1 ? styles.filaSeleccionada : ''}
                  onClick={() => seleccionarFila(1)}
                >
                  <td className={styles.documento}>03/04/2023</td>
                  <td className={styles.acciones}>
                    <a href="ruta_al_archivo" rel="noreferrer" target="_blank">
                      <img src={download} className={styles.download} alt="Descargar" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {filaSeleccionada !== null ? (
              <button className={styles.button} onClick={mostrarFormularioHandler}>
                + Acciones
              </button>
            ) : (
              <p className={styles.parr}>Selecciona un documento para consultar información detallada</p>
            )}
          </div>
        )}
      </>
      {mostrarFormulario && <Formularioficha />}
    </div>
  );
}

export default Ficha;
