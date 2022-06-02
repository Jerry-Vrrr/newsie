import React from "react";
import "./Article.css";

export default function ({ item, setHighlighted, id, setModalOpen }) {
const handleClick = () => {
    setHighlighted(item)
    setModalOpen(true)
}

  return (
    <div className="article" id={id}>
    <div className='title' >
      <h4>{item.title}</h4>
    </div>
    <img id={id} onClick={() => handleClick()} className="image"  src={item.multimedia[0].url} />
  </div>
  );
}
