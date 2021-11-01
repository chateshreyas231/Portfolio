import React from "react";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { MDBRow, MDBCol } from "mdbreact";
import profile from "../components/photos/Profile1.png";

function AboutMe() {
  return (
    <div className="aboutme">
      <Fade top duration={1500}>
        <h1>About Me</h1>
      </Fade>

      <MDBRow>
        <div className="contain">
          <MDBCol>
            <Slide left duration={2200}>
              <div className="contain__image">
                <img src={profile} alt="" align="left" />
              </div>{" "}
            </Slide>
          </MDBCol>

          <MDBCol>
            <div className="contain__text">
              <Fade right duration={2000}>
                <p>
                  Hello there! I'm a 22 year old young visioner who want to make
                  a change in this world by making better solutions at their
                  best efficiency and resolve problems which people face. I am a
                  Machine learning enthusiast who is slowly exploring all the
                  feilds of artificial intelligence and gaining knowledge
                  related to feilds, which will eventually help me achieve my
                  goals.
                  <br />
                  <br />
                  Computers and other stuff related to technology fascinated me
                  when I was a child, I discovered languages such as C, C++ and
                  saw the magic they can do in the tech world! Getting fond of
                  technology I choose my path related to computers, as it was
                  the only option we had in our school curriculum, and following
                  this i continued to opt for subjects related to computer field
                  which led to Enginnering in IT.
                  <br />
                  Utilizing the period of lockdown and I learnt Machine Learning
                  and Data Science also I learnt Django for developing web
                  applications and later found ReactJs which got me attracted
                  towards being a Full Stack React Web Devloper.
                  <br />
                  <br />
                  Coming to lifestyle, I like to stay fit mentally and
                  physically, so I workout regularly, eat healthy and stay
                  positive.
                </p>
              </Fade>
            </div>
          </MDBCol>
        </div>
      </MDBRow>
    </div>
  );
}

export default AboutMe;
