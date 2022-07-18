import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import pic5 from "../assets/pic5.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img className="me" src={pic5} alt="me" />
        <h2> Welcome to Kelv's Hub</h2>
        <div className="prompt">
          <p>
            A Junior Software Developer with a Passion for Learning and
            Creating.
          </p>
          <a
            href="https://www.linkedin.com/in/kelvincode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto: info.akelvin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/kelvcod/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, React Native, NPM, BootStrap,
              MaterialUI, Materialized CSS, SASS, Tailwind CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, SQL, FireBase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
