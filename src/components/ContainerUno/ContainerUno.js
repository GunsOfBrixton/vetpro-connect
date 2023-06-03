import React from 'react'
import './ContainerUno.css';
import imagen1 from '../../assets/img/imagen1.jpg';


function ContainerUno() {
  return (
    <div className="container1">
      <h1 className='title'>VetPro Connect</h1>
      <p className='parr'>holaholaaaa</p>
      <a className ='button' href="/">Regístrate</a>
      <img src={imagen1} className='image' />
    </div>
  )
}

export default ContainerUno
