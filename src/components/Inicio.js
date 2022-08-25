import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoProyectos } from './ListadoProyectos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola soy <strong>Gerlin Gonzalez</strong> y soy Desarrollador Web en Cartagena-Bolivar, 
        y ofrezco mis servicios de <strong>programador y desarrollador</strong> en todo tipo 
        de proyecto web.  
      </h1>  
      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicacion web, para tener mas visibilidad 
        y relevancia en internet. <Link to="/contacto"> Contacta conmigo </Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Alguno de mis Proyectos</h2>
        <p>Estos son algunos de mis ultimos proyectos</p>


      <ListadoProyectos limite="3" />

      <Link className='boton' to="/portafolio"> Ver Mas</Link>

      </section>
    </div>
  )
}
