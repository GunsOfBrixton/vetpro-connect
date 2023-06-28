import React from 'react';
import styles from './Formulario.module.css';

function Formulario({ documento }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className={styles.formularioContainer}>
        <div className={styles.titlecont}><h3 className={styles.title}>Ingresar datos</h3></div>
      <form onSubmit={handleSubmit}>
        <div className={styles.flex}>
            <div className={styles.formGroup}>
                <label htmlFor="dia">Día</label>
                <input type="date" id="dia" name="dia" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="hora">Hora</label>
                <input type="text" id="hora" name="hora" />
            </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="servicio">Servicio</label>
          <input type="text" id="servicio" name="servicio" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mascota">Mascota</label>
          <input type="text" id="mascota" name="mascota" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="observaciones">Observaciones</label>
          <textarea id="observaciones" name="observaciones" rows="4" />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Asignar documento</button>
          <button type="button" className={styles.cancelButton}> <a href='/admin'> Cancelar</a></button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
