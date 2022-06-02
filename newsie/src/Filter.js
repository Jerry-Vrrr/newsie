import React from 'react'
import './Filter.css'

function Filter({fetch}) {
  return (
    <div>
        <button onClick={() => fetch('movies')}>Movies</button>
        <button onClick={() => fetch('obituaries')}>Obituaries</button>
        <button onClick={() => fetch('food')}>Food</button>
    </div>
  )
}

export default Filter