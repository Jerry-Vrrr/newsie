import React from "react";
import Article from "./Article";
import "./NewsReel.css";

export default function NewsReel({ home, setHighlighted, setModalOpen }) {
  const homeMap = home.map((item, i) => (
    <Article  setModalOpen={setModalOpen} setHighlighted={setHighlighted} item={item} id={i} key={i} />
  ));

  return <div className="reel">{homeMap}</div>;
}
