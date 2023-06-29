import React, { useState } from 'react';
import style from './User.module.css';
import { login } from '../../Utils';
import logo from '../../assets/img/logo.png';
import Usernav from './Usernav/Usernav';
import Calendar from './Calendar/Calendar';
import Calendars from './Calendar/Calendars';

function User() {
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

  return (/* !usuarioLogeado 
    ? <Login logearUsuario={logearUsuario}/>
    : */<div>
      <Usernav/>

      <div className={style.contenido}>
        <div className={style.userContainer}>
          <h2 className={style.title}>Tu agenda</h2>
          <p className={style.parra}>Aquí puedes ver tus horas agendadas. Recuerda llegar 10 minutos antes a la consulta para agilizar el proceso.</p>
          <h5 className={style.subtitle}>Tienes X citas programadas:</h5>
          <div className={style.cont1}>
            <div className={style.subcont1}>
              <div className={style.subtitle1}>Fecha</div>
              <div className={style.fecha}>Sábado 17 de abril, 2023</div>
              <div className={style.subtitle1}>Hora:</div>
              <div className={style.fecha}>13:45hrs</div>
            </div>
            <div className={style.subcont2}>
              <div className={style.info}>Mascota: Momo</div>
              <div className={style.info}>Servicio: Visita General</div>
              <div className={style.info}>Profesional: Dr. Iván Torres</div>
            </div>
          </div>
        </div>

        <div className={style.agendaContainer}>
          <h2 className={style.title}>Agenda una atención</h2>
          <p className={style.parraf}>Selecciona un día del calendario para agendar tu atención</p>
{/*           <Calendars/> */}
          <div className={style.calendar}>
            <label htmlFor="dia"></label>
            <input type="date" id="dia" name="dia" />
          </div>
          <div className={style.selectedday}> Función "Día seleccionado"</div>
          <div>
            <p className={style.parraf}>¿Qué servicio deseas agendar?</p>
            <p className={style.parraf}>¿Con qué profesional deseas agendar?</p>
            <p className={style.parraf}>Selecciona un horario disponible</p>
            <p className={style.parraf}>Nombre de la mascota</p>
          </div>
          <button className={style.button}>Agendar cita</button>
        </div>
      </div>
      </div>
  )
}

export default User