import React from "react";
import "./Skills.css";
import { MDBProgress, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Pulse from "react-reveal/Pulse";
import Flip from "react-reveal/Flip";
import react from "./photos/react.png";import python from "./photos/python.png";

function Skills() {
  return (
    <>
      <strong>
        <h1 style={{ color: "white" }}>Skills</h1>
      </strong>
      <div className="skills">
        <div className="logo">
          <Pulse duration={2000}>
            <MDBRow>
              <MDBCol className="logo__single" md="2">
                <img
                  src={react}
                  alt=""
                  style={{ maxWidth: 120 }}
                />
                <p className="logo__info">React Js</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                  alt=""
                  style={{ maxWidth: 103 }}
                />
                <p className="logo__info">JavaScript</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src={python}
                  alt=""
                  style={{ maxWidth: 110 }}
                />
                <p className="logo__info">Python</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://static.djangoproject.com/img/logos/django-logo-negative.svg"
                  alt=""
                  style={{ maxWidth: 230 }}
                />
                <p className="logo__info">Django</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://icon-library.com/images/java-icon-png/java-icon-png-16.jpg"
                  alt=""
                  style={{ maxWidth: 102 }}
                />
                <p className="logo__info">Core Java</p>
              </MDBCol>

              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://cdn4.iconfinder.com/data/icons/gradient-circle-blue/36/5106-512.png"
                  alt=""
                  style={{ maxWidth: 95 }}
                />
                <p className="logo__info">RDBMS</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png"
                  alt=""
                  style={{ maxWidth: 95 }}
                />
                <p className="logo__info">C++</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://www.britefish.net/wp-content/uploads/2019/07/logo-c-1.png"
                  alt=""
                  style={{ maxWidth: 100 }}
                />
                <p className="logo__info">C</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
                  alt=""
                  style={{ maxWidth: 95 }}
                />
                <p className="logo__info">HTML5</p>
              </MDBCol>
              <MDBCol className="logo__single" md="2">
                {" "}
                <img
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
                  alt=""
                  style={{ maxWidth: 95 }}
                />
                <p className="logo__info">CSS3</p>
              </MDBCol>
            </MDBRow>
          </Pulse>

          <br />
        </div>
      </div>
      <br />
      <strong>
        <h1 style={{ color: "white" }}>
          Other Tools
          <br />
        </h1>
      </strong>
      <br />
      <div>
        <Flip bottom>
          <div className="tool">
           
            <div className="tool__single" md="2">
              <img
                src="https://img.icons8.com/color/452/firebase.png"
                alt=""
                style={{ maxWidth: 78 }}
              />
              <p className="logo__info">Firebase</p>
            </div>{" "}
            <br />
            <div className="tool__single" md="2">
              {" "}
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png"
                alt=""
                style={{ maxWidth: 81 }}
              />
              <p className="logo__info">Heroku</p>
            </div>
            <div className="tool__single" md="2">
              {" "}
              <img
                src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
                alt=""
                style={{ maxWidth: 82 }}
              />
              <p className="logo__info">Postman</p>
            </div>
            <div className="tool__single" md="2">
              {" "}
              <img
                src="https://static.wixstatic.com/media/5bc5f9_05bdca9cad0943659238e7e8473f6746~mv2.png/v1/fill/w_336,h_336,al_c,lg_1,q_85/mongodb-logo.webp"
                alt=""
                style={{ maxWidth: 80 }}
              />
              <p className="logo__info">mongoDB</p>
            </div>
            <div className="tool__single" md="2">
              {" "}
              <img
                src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png"
                alt=""
                style={{ maxWidth: 130 }}
              />
              <p className="logo__info">express</p>
            </div>
            <div className="tool__single" md="2">
              {" "}
              <img
                src="https://miro.medium.com/max/1200/1*yYN3pRB9mGS-IG_-agqDvA.png"
                alt=""
                style={{ maxWidth: 135 }}
              />
              <p className="logo__info">node</p>
            </div>
          </div>
        </Flip>
      </div>
    </>
  );
}

export default Skills;
