import "./skills.css";

import github from "../../img/github.png";
import css from "../../img/css-3.png";
import bootstrap from "../../img/bootstrap.png";
import sass from "../../img/sass.png";
import js from "../../img/js.png";
import reactjs from "../../img/react.png";
import html from "../../img/html-5.png";
import psd from "../../img/photoshop.png";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1></h1>
      <article class="locations">
        <div class="containerlocations">
          <div className="leftskills">
            <div className="imgContainer">
              <img src={html} />
            </div>
            <div className="imgContainer">
              <img src={css} />
            </div>
            <div className="imgContainer">
              <img src={bootstrap} />
            </div>
            <div className="imgContainer">
              <img src={sass} />
            </div>
          </div>
          <div className="rightskills">
            <div className="imgContainer">
              <img src={js} />
            </div>
            <div className="imgContainer">
              <img src={reactjs} />
            </div>
            <div className="imgContainer">
              <img src={psd} />
            </div>
            <div className="imgContainer">
              <img src={github} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Skills;
