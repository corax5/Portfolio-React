import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajo } from './ListadoTrabajos'
export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy <strong>Irian Cortés</strong> y soy desarrollador web en Logroño,
        y ofrezco mis servicios de <strong>programación y desarrollo</strong> en
        todo tipo de proyectos web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicacion web, tener mas
        visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web:</p>

        
        <ListadoTrabajo limite="2" />
        

      </section>

    </div>
  )
}
