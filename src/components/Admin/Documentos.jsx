import React, { useState, useEffect } from 'react';
import { BACKEND_URL, consultarDocumentos } from '../../Utils';
import styles from './Admin.module.css';

function Documentos({ seleccionadoCliente }) {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    consultarDocumentos(seleccionadoCliente.id_mascota).then((res) => {
      setDocumentos(res);
    });
  }, [seleccionadoCliente]);

  return (
    <div className={styles.documentosContainer}>
      <h1>Documentos</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Documento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((documento, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{documento.documento}</td>
              <td><a rel="norefereer" target='_blank' href={`${BACKEND_URL}/media/${documento.ruta}`}>Descargar</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Documentos;