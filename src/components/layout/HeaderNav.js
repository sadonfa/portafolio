import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <h2> Gerlin Gonzalez  </h2>
            <p> ge gova.co </p>
        </div>        
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/inicio"
                        className={({isActive}) => isActive ? 'activado' : "" }>
                            Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/portafolio"
                        className={({isActive}) => isActive ? 'activado' : "" }>
                            Portafolio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/servicios"
                        className={({isActive}) => isActive ? 'activado' : "" }>
                            Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/curriculum"
                        className={({isActive}) => isActive ? 'activado' : "" }>
                            Curriculum
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contacto"
                        className={({isActive}) => isActive ? 'activado' : "" }>
                            Contacto
                    </NavLink>
                </li>            
            </ul>
        </nav>
        
    </header>
  )
}
