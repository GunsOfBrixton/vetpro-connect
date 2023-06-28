import React from 'react'
import style from './Page.module.css';
import imagen1 from '../../../assets/img/imagen1.jpg';
import imagen2 from '../../../assets/img/imagen2.jpg';
import imagen3 from '../../../assets/img/imagen3.webp';
import imagen4 from '../../../assets/img/imagen4.jpg';
import prof1 from '../../../assets/img/prof1.jpg';
import prof2 from '../../../assets/img/prof2.jpg';
import map from '../../../assets/img/map.png';
import mail from '../../../assets/icons/mail.svg'
import phone from '../../../assets/icons/phone.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'
import location from '../../../assets/icons/location.svg'


function Page() {
  return (
    <>
    <div id="inicio" className={style.container1}>
      <h1 className={style.maintitle}>VetPro Connect</h1>
      <p className={style.parr}>¡Bienvenido/a a la plataforma digital diseñada para simplificar la gestión con tu clínica veterinaria favorita! Ten acceso a recursos y herramientas para optimizar los procesos y mejorar tu atención.</p>
      <a className ={style.button} href="/registro">Regístrate</a>
      <img src={imagen1} className={style.image} />
    </div>

    <div className={style.container2}>
      <div className={style.subcontainer2}>
        <img src={imagen2} className={style.subimage} />
        <h3 className={style.subtitle}>Gestiona tus citas</h3>
        <p className={style.parra}>Pide y calendariza tus consultas con nuestros profesionales.</p>
      </div>
      <div className={style.subcontainer2}>
        <img src={imagen3} className={style.subimage} />
        <h3 className={style.subtitle}>Descarga tus recetas</h3>
        <p className={style.parra}>Obtén las recetas de tu mascota en formato PDF cuando y donde quieras.</p>
      </div>
      <div className={style.subcontainer2}>
        <img src={imagen4} className={style.subimage} />
        <h3 className={style.subtitle}>Avisos automatizados</h3>
        <p className={style.parra}>Recibe notificaciones para continuar con el tratamiento de tu mascota.</p>
      </div>
    </div>

    <div id="quienessomos" className={style.container3}>
      <h1 className={style.title}>Nuestro Equipo</h1>
      <p className={style.msg}>Conoce a nuestro equipo de profesionales apasionados por la salud y el bienestar de tus mascotas. 
      ¡Confía en nosotros para cuidar de tus amigos peludos!</p>
      <div className={style.subcontainer3}>
        <div className={style.subsubcontainer3}>
          <img src={prof1} className={style.subimage2} />
          <h3 className={style.subtitle}>Joaquín Ibarra</h3>
          <p className={style.parra}>Redes sociales</p> 
        </div>
        <div className={style.subsubcontainer3}>
          <img src={prof2} className={style.subimage2} />
          <h3 className={style.subtitle}>Joaquín Ibarra</h3>
          <p className={style.parra}>Redes sociales</p> 
        </div>
        <div className={style.subsubcontainer3}>
          <img src={prof1} className={style.subimage2} />
          <h3 className={style.subtitle}>Joaquín Ibarra</h3>
          <p className={style.parra}>Redes sociales</p> 
        </div>
        <div className={style.subsubcontainer3}>
          <img src={prof2} className={style.subimage2} />
          <h3 className={style.subtitle}>Joaquín Ibarra</h3>
          <p className={style.parra}>Redes sociales</p> 
        </div>
      </div>
    </div>
    <div id="contacto" className={style.container4}>
      <article className={style.div1}>
        <h1 className={style.title1}>Cóntáctanos!</h1>
        <p className={style.parr}>Estaremos contentos de ayudarte, porfavor ingresa tus datos de contacto y  redacta tu mensaje. Pronto recibirás la respuesta a tu correo.</p>
        <div className={style.inputgroup}>
          <label className={style.label}>Su nombre</label>
          <input autoComplete="off" name="Name" id="Name" className={style.input1} type="text" />
        </div> 
        <div className={style.inputgroup}>
          <label className={style.label}>Correo electrónico</label>
          <input autoComplete="off" name="Email" id="Email" className={style.input1} type="email" />
        </div> 
        <div className={style.inputgroup}>
          <label className={style.label}>Su mensaje</label>
          <input autoComplete="off" name="Msg" id="Msg" className={style.input2} type="text" />
        </div> 
        <a className ={style.button1} href="/">Enviar</a>
      </article>
      <article className={style.div2}>
        <img src={mail} className={style.icon} />
        <a className={style.info}>contacto@vetpro.cl</a>
        <img src={phone} className={style.icon} />
        <a className={style.info}>+5672899885</a>
        <img src={whatsapp} className={style.icon} />
        <a className={style.info}>+56949679768</a>
        <img src={location} className={style.icon} />
        <a className={style.info}>Alameda #205, Rancagua, Chile</a>
        <a href="https://www.google.cl/maps/place/Av.+Libertador+Bernardo+O'Higgins+205,+Rancagua,+O'Higgins/@-34.1582528,-70.7669012,17z/data=!3m1!4b1!4m5!3m4!1s0x966342fdf9094cff:0x9cb208c976173193!8m2!3d-34.1582573!4d-70.7643263?entry=ttu">
        <img src={map} className={style.map} /></a>
      </article>
    </div>
    </>
  )
}

export default Page
