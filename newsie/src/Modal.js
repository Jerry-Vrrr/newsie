import React from 'react'
import './Modal.css'

function Modal({highlighted, modalOpen, setModalOpen}) {
    console.log(highlighted.abstract)
    return (
    <div className="overlay" onClick={() => setModalOpen(false)}>
      <div className="modal">
      <h1>{highlighted.title}</h1>    
      <img src={highlighted.multimedia[0].url}/>
      <h2>{highlighted.abstract}</h2>
      </div>
    </div>
    )
}

export default Modal