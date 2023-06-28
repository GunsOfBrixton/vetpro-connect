import React, { useState, useEffect } from 'react';
import { BACKEND_URL, consultarDocumentos } from '../../Utils';
import styles from './Admin.module.css';
import download from '../../assets/icons/download.svg';
import Formulario from './Formulario/Formulario';

function Documentos({ seleccionadoCliente }) {
  const [documentos, setDocumentos] = useState([]);
  const [filaSeleccionada, setFilaSeleccionada] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [documentoSeleccionado, setDocumentoSeleccionado] = useState(null);
  

  useEffect(() => {
    consultarDocumentos(seleccionadoCliente.id_mascota).then((res) => {
      setDocumentos(res);
    });
  }, [seleccionadoCliente]);

  const mostrarFormularioHandler = () => {
    if (filaSeleccionada !== null) {
      setDocumentoSeleccionado(documentos[filaSeleccionada]);
      setMostrarFormulario(true);
    }
  };

  const seleccionarFila = (indice) => {
    setFilaSeleccionada(indice);
  };

  const mostrarMensaje = () => {
    if (filaSeleccionada === null) {
      return <p>Selecciona un documento para asignarlo</p>;
    }
    return null;
  };

  return (
    <div className={styles.documentosContainer}>
      <h2>Documentos</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.tabletitle}>Documento</th>
            <th className={styles.tabletitle}>Acciones</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {documentos.map((documento, i) => (
            <tr
              key={i}
              className={filaSeleccionada === i ? styles.filaSeleccionada : ''}
              onClick={() => seleccionarFila(i)}
            >
              <td className={styles.documento}>{documento.documento}</td>
              <td className={styles.acciones}>
                <a rel="norefereer" target="_blank" href={`${BACKEND_URL}/media/${documento.ruta}`}>
                  <img src={download} className={styles.download} alt="Descargar" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filaSeleccionada !== null ? (
        <button className={styles.button} onClick={mostrarFormularioHandler}>
          Asignar
        </button>
      ) : (
        <p>Selecciona un documento para asignarlo</p>
      )}
      {mostrarFormulario && <Formulario documento={documentoSeleccionado} />}
    </div>
  );
}

export default Documentos;
