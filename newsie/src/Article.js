import React from "react";
import "./Article.css";

export default function ({ item, setHighlighted }) {
  return (
    <div className="article">
    <div className='title' >
      <h4>{item.title}</h4>
    </div>
    <img className="image"  src={item.multimedia[0].url} />
  </div>
  );
}
