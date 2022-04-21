import MyImg from "../../img/myImg.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <img src={MyImg} className="intro-img"></img>
      </div>
      <div className="intro-right">
        <div className="intro-right-wrapper">
          <h2>Hello, I'm</h2>
          <h1>Jully Gomez</h1>
          <div className="intro-title">
            <div className="intro-title-items">
              <div className="intro-title-item">Front-End Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Junior Architect</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
          <div className="shortdescription">
            <p>
              I design buildings and guess what?{" "}
              <span className="websites"> WEBSITES </span>too! This year (2022)
              I've decided to shift into industry of Web Development as
              <span className="frontend"> Front-End Developer. </span>
              Know more about me through this website.
            </p>
          </div>
          <div className="intro-cta">
            <button className="button-cta whitebtn">Know More</button>
            <a
              href="gomez_resumeUpdated.pdf"
              download="Gomez gomez_resumeUpdated.pdf">
              <button className="button-cta greenbtn">Get Resumé</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
