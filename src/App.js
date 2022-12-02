import React,{useEffect} from 'react';
import './App.css';
import profile from "./IMG_20221104_165345.jpg"



function App() {
  useEffect(()=>{
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
  })
  return (
    <div className="App">
      <div className="nav_left">
          <button type="button">Visit My Portfolio</button>
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
              <span>Lokanath Panda</span>
              <br></br>
              I am just a learner now, determined to achieve great goal with my passion.
              <br></br>
              My main interest is in Web Development. I am always eager to learn something new in my life.
              <br></br>
              "I love to code"
              <br></br>
          </p>
          <div className="heading">
              Social Handles
          </div>
          <br></br>
          <button className="button button1" type="button">Follow on Twitter</button> 
              <br></br>
          <button className="button button2" type="button">Friends on Facebook</button> 
              <br></br>
          <button className="button button3" type="button">Connect In Linkedin</button> 
              <br></br>
          <button className="button button4" type="button">Follow on Instagram</button> 
              <br></br>
          <button className="button button5" type="button">Follow on Github</button>
          <br></br>
              
          <div className="heading">
              Projects
          </div>
              <br></br>
              <button className="button button1" type="button">Pacific Note- A simple Note taking app</button> 
              <br></br>
              <button className="button button2" type="button">Pacific Gym- A gym website</button> 
              <br></br>
              <button className="button button3" type="button">Microsoft Clone</button> 
              <br></br>
              <button className="button button4" type="button">Facebook</button> 
              <br></br>
              <button className="button button5" type="button">Facebook</button>
              <br></br>
          <footer className="heading">
              Thank You
          </footer>
              <br></br>
          <br></br>
      </div>
      </div>
  );
}

export default App;
