import React, { useEffect } from "react";
import "./App.css";
import profile from "./image/IMG_20230514_155501.jpg";

function App() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  });
  return (
    <div className="App">
      <div className="nav_left">
        <button type="button">
          <a
            href="https://lokanath-portfolio.netlify.app/"
            rel="noreferrer"
            target={"_blank"}
          >
            Visit My Portfolio
          </a>
        </button>
      </div>
      <div className="cube-wrap">
        <div className="cube">
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
      </div>
      <div className="container">
        <img className="profile" src={profile} alt="Profile"></img>
        <p>
          <span className="span">Lokanath Panda</span>
          <br />
          <span className="span1">
            Data Science And Analysis Engineer || Web Developer || UI/UX
            Designer{" "}
          </span>
          {/* <br />
              I am just a learner now, determined to achieve great goal with my passion.
              <br />
               I am always eager to learn something new in my life. Cracking codes and writing lines, that's what I do best. 
              <br />
              I am a motivated computer science student who is passionate about using technology to solve complex problems.
              <br />
              I love to code
              <br /> */}
          <p>
            I am a motivated professional with experience in data science and
            analysis and full stack development. <br />
            With expertise in data analysis and insights generation, I have
            supported decision-making processes. In full stack development,
            <br /> I have successfully designed and developed web applications
            with a focus on user experience and functionality. Additionally, I
            have demonstrated <br />
            strong skills in database management. With a passion for leveraging
            technology and a dedication to continuous learning, I am
            <br /> well-equipped to contribute to innovative projects in the
            field of data analysis and full stack development.
          </p>
        </p>
        <div className="heading">Social Handles</div>
        <br />
        <button className="button button1" type="button">
          <a
            href="https://twitter.com/Lokanat48464605"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Twitter
          </a>{" "}
        </button>
        <br />
        <button className="button button2" type="button">
          <a
            href="https://www.facebook.com/profile.php?id=100071480734923"
            target="_blank"
            rel="noreferrer"
          >
            Friends on Facebook
          </a>
        </button>
        <br />
        <button className="button button3" type="button">
          <a
            href="https://www.linkedin.com/in/lokanath-panda-642193238/"
            target="_blank"
            rel="noreferrer"
          >
            Connect In Linkedin
          </a>{" "}
        </button>
        <br />
        <button className="button button4" type="button">
          <a
            href="https://www.instagram.com/lokanio.h/"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Instagram
          </a>
        </button>
        <br />
        <button className="button button5" type="button">
          <a
            href="https://github.com/iamlokanath"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Github
          </a>
        </button>
        <br />

        <div className="heading">Projects</div>
        <br />

        

        <button className="button button4" type="button">
          <a
            href="https://pacific-quotes.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Pacific Quotes
          </a>
        </button>
            <br />
        <button className="button button5" type="button">
          <a
            href="https://romifinanceassignment.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Romi Finance
          </a>
        </button>
        <br />
        <button className="button button5" type="button">
          <a
            href="https://gceknavalncc.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            GCEK NAVAL NCC
          </a>
        </button>
        <br />
        <button className="button button5" type="button">
          <a
            href="https://retirement-strategy.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Retirement Strategy
          </a>
        </button>
        <br />

        <button className="button button1" type="button">
          <a
            href="https://pacific-note.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Pacific Note
          </a>
        </button>
        <br />
        <button className="button button2" type="button">
          <a
            href="https://iamlokanath.github.io/weather/"
            target="_blank"
            rel="noreferrer"
          >
            Pacific Weather
          </a>
        </button>
        <br />
        <button className="button button3" type="button">
          <a
            href="https://iamlokanath.github.io/Pacific_Calculator/"
            target="_blank"
            rel="noreferrer"
          >
            Pacific Calculater
          </a>
        </button>
        <br />
        <button className="button button3" type="button">
          <a
            href="https://jagannathpuri.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Puri
          </a>
        </button>
        <br/>

        {/* <footer className="footer">
          Thank You <br />
          Website is designed & developed by Lokanath Panda
        </footer> */}

        <div className="footer">
          <div className="footer-dec">
          Thank You <br />
          Website is designed & developed by Lokanath Panda
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
