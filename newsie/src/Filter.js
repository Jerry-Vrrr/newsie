import React from 'react'
import './Filter.css'

function Filter({fetch}) {
  return (
    <div>
        <button onClick={() => fetch('home')} >Home</button>
        <button onClick={() => fetch('world')}>World News</button>
        <button onClick={() => fetch('us')} >US News</button>
        {/* <button onClick={() => fetch('science')} >Science News</button> */}
    </div>
  )
}

export default Filter