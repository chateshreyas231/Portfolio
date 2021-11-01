import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Education.css';
import {MDBIcon} from "mdbreact"

function Education() {
    return (
        <div className="education">
          <div style={{color:'white', fontSize:50, marginTop:10}}><MDBIcon icon="university" /><br/> <b>Education</b></div>
          <Container>
          
            <Row>
              <Col >
                    <Fade bottom duration={1500} className="container__text">
                        <p>
                        <h1>I. Bachelor of Engineering</h1><h1> (Information Technology)</h1>
                          Marathwada Mitra Mandal’s College of Engineering, Pune<br/>
                          2017-2021<br/>
                          Average CGPA: 8.27
                        </p>
                    </Fade>  
              </Col>
              <Col > 
                      <Fade bottom duration={2000} className="container__text">
                        <p>
                        <h1>II. Class XII </h1><h1>(HSC Board)</h1>
                        Sinhgad College of Arts, Science & Commerce, Pune<br/>
                          2017<br/>
                      Percentage: 68.38%

                        </p>
                    </Fade>
            </Col>
              <Col > 
                    <Fade bottom duration={2500} className="container__text">
                        <p>
                        <h1>III. Class X </h1><h1> (CBSE Board)</h1>
                        Abhinav English School, Pune<br/>
                        2015<br/>
                        CGPA: 8/10
                        </p>
                    </Fade> 
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Education
