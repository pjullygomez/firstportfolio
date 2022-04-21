import React from "react";
import ReactDOM from "react-dom";
import Intro from "./components/intro/Introduction";
import "./components/intro/introduction.css";
import Contact from "./components/Contact/ContactForm";
import { MyTimeline } from "./components/timeline/MyTimeline";
import "./components/timeline/mytimeline.css";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import ActionAreaCard from "./components/projects/Projects";
import "./components/projects/projects.css";

const App = () => {
  return (
    <div>
      <Intro />
      <MyTimeline />
      <Skills />
      <ActionAreaCard />
      <Contact />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
