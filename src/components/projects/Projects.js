import React from "react";

import kakaibeans from "../../img/kakaibeans.png";
import calcu from "../../img/calculator.png";
import todo from "../../img/todo.png";

export default function ActionAreaCard() {
  return (
    <div className="cardlist">
      <div className="cardContainer">
        <div className="project project1">
          <img src={kakaibeans} className="imgproject" alt="kakaibeans" />
          <a
            href="https://pjullygomez.github.io/1stproject.html"
            target="_blank">
            Kakaibeans Website
          </a>
        </div>
        <div className="project proj2">
          <img src={calcu} className="imgproject" alt="calc" />
          <a
            href="https://pjullygomez.github.io/ecalc.github.io/ecalculator.html"
            target="_blank">
            Online Calculator
          </a>
        </div>
        <div className="project proj3">
          <img src={todo} className="imgproject" alt="todo" />
          <a href="https://ejournalgomez.netlify.app/" target="_blank">
            To do List
          </a>
        </div>
      </div>
    </div>
  );
}
