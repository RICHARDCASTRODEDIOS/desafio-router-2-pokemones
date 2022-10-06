import React from 'react'
import pikachu from '../assets/img/pikachu-home.png';

export default function Home() {
  return (
    <div className='container'>
      <div className="content">
        <h1>Bienvenido maestro pokemón</h1>
        <div className="pikachu-home">
          <img src={pikachu} alt='Poster Pokemons' />
        </div>
      </div>
    </div>
  )
}

