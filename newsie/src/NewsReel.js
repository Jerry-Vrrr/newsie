import React from "react";
import Article from "./Article";
import "./NewsReel.css";

export default function NewsReel({ home, setHighlighted }) {
  const homeMap = home.map((item, i) => (
    <Article setHighlighted={setHighlighted} item={item} key={i} />
  ));

  return <div className="reel">{homeMap}</div>;
}
