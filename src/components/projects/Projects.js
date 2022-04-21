import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import kakaibeans from "../../img/kakaibeans.png";
import calcu from "../../img/calculator.png";
import todo from "../../img/todo.png";

export default function ActionAreaCard() {
  return (
    <div className="cardlist">
      <div className="cardContainer">
        <div className="project project1">
          <img src={kakaibeans} className="imgproject" />
          <a
            href="https://pjullygomez.github.io/1stproject.html"
            target="_blank">
            Kakaibeans Website
          </a>
        </div>
        <div className="project proj2">
          <img src={calcu} className="imgproject" />
          <a
            href="https://pjullygomez.github.io/ecalc.github.io/ecalculator.html"
            target="_blank">
            Online Calculator
          </a>
        </div>
        <div className="project proj3">
          <img src={todo} className="imgproject" />
          <a
            href="https://pjullygomez.github.io/ecalc.github.io/ecalculator.html"
            target="_blank">
            To do List
          </a>
        </div>
      </div>
    </div>
  );
}
