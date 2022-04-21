import "./contact.css";
import fb from "../../img/facebook.png";
import email from "../../img/email.png";
import github from "../../img/github.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yia4krt",
        "template_yqkpwof",
        form.current,
        "g9il0GcuZ5Ao6XVe7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="formContainer">
        <form className="mainForm" ref={form} onSubmit={sendEmail}>
          <div className="title">
            <h2>CONTACT</h2>
          </div>
          <div>
            <h2>Let's discuss more!</h2>
          </div>
          <div className="half">
            <div className="item">
              <label for="name">NAME</label>
              <input type="text" id="name" name="user_name" />
            </div>
            <div className="item">
              <label for="email">EMAIL</label>
              <input type="text" id="email" name="user_email" />
            </div>
          </div>
          <div className="full">
            <label for="message">MESSAGE</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="action">
            <input type="submit" value="SEND MESSAGE" />
            <input type="reset" value="RESET" />
            <div>{done && "Message Received!"}</div>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/">
              <img className="contactimage" src={fb} alt="fblogo" />
            </a>
            <a href="https://www.google.com/">
              <img className="contactimage" src={email} alt="emaillogo" />
            </a>
            <a href="https://www.github.com/">
              <img className="contactimage" src={github} alt="github" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
