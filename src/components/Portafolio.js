import React from 'react'
import { trabajos } from '../Data/Trabajos';
import { Route, Routes, NavLink, BrowserRouter, Link } from 'react-router-dom';
import { ListadoTrabajo } from './ListadoTrabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      
   <ListadoTrabajo />
    </div>
  )
}