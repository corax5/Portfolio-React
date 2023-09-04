import React from 'react'
import { trabajos } from '../Data/Trabajos';
import { Route, Routes, NavLink, BrowserRouter, Link } from 'react-router-dom';

export const ListadoTrabajo = ({limite}) => {
  return (
    <div className='page'>
      
    <section className='works'>
    {
      trabajos.slice(0.,2).map(trabajo =>{
        return (
        <article key={trabajo.id} className='work-item'>
          <div className='mask'>
            <img src={"/images/"+ trabajo.id + ".png"} />
          </div>
          <span>{trabajo.Categorias}</span>
          <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
          <h3>{trabajo.tecnologias}</h3>
        </article>
        );
      })
    }
</section>

    </div>
  )
}