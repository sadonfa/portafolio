import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const ListadoProyectos = ({limite}) => {
  return (
    <section className='works'>
        {
          trabajos.slice(0, limite).map(trabajo => {
            return (
              <article className='works-item' key={trabajo.id}>
                <div className='mask'>
                  <img src={"/images/" + trabajo.id + ".png"} />
                </div>

                <span>{trabajo.categoria}</span>
                <h2><Link to={"../proyecto/"+trabajo.id}>{trabajo.nombre} </Link></h2>
                <h3> {trabajo.tecnologias} </h3>
              </article>
            )
          })
        }

      </section>

  )
}
