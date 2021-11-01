import React from 'react'
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import './Activities.css'
import Flip from 'react-reveal/Flip';

function Activities() {
    return (
        <div className="activities">
              <div style={{color:'white', fontSize:50}}>Extra-Curricular</div>
             
              <div className="ex_activities">
              <Flip top duration={1400}>
              <section className="my-5">
                <MDBRow>
                
                    <MDBCol md="4" className="md-0 mb-5">

                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                             {/* <MDBIcon icon="bullhorn" size="2x" className="blue-text" /> */}
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">MMCOE Ensemble</h4>
                            <p className="grey-text"><br/>
                            Coordinator for events in annual college event.<br/>
                            Fun Fair | Traditional Day | Fitness Mania <br/>
                             Dextirity | Stage Management 
                            <br/>
                            2k19 | 2k20
                            </p>
                            <MDBBtn color="primary" size="sm" 
                            href="https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events/ensemble">
                                Learn more
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    </MDBCol>
                   

                    <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            {/* <MDBIcon icon="cogs" size="2x" className="pink-text" /> */}
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">National Service Scheme (NSS)</h4>
                            <p className="grey-text"><br/>
                                Volunteer for 1 year in social events such as <br/> tree plantation, blood donation camps, job fair etc.<br/>
                                2017-2018 
                            </p><br/>
                        <MDBBtn color="pink" size="sm" 
                        href="https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events/nss-extension-activities">
                            Learn more
                        </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    </MDBCol>

                    <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            {/* <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" /> */}
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Information Technology<br/> Student Association  </h4>
                            <p className="grey-text">
                            <strong>{'>>'} Department General Secretary</strong><br/>
                            Student Association to organize events in college life. <br/>
                            Seminars | Guest Lectures | Sports Events<br/>
                            2019-2020 
                            </p>
                        <MDBBtn color="purple" size="sm" 
                        href="https://www.mmcoe.edu.in/index.php/information-technology/information-technology/26272e/students-association">
                            Learn more
                        </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    </MDBCol>
                    
                </MDBRow>
                </section>
                </Flip>
                </div>
  
              <div style={{color:'white', fontSize:50}}>Hobbies & Intrests</div>
              <div className="hobbies">
                <div className="text-center my-5">
                
                    <MDBRow>
                    <MDBCol md="4">
                        <MDBIcon icon="dumbbell" size="3x" className="red-text" />
                        <h5 className="font-weight-bold my-4 text-light">Fitness Entusiast</h5>
                    </MDBCol>

                    <MDBCol md="4">
                        <img src="https://pngimg.com/uploads/chef/chef_PNG134.png" style={{maxWidth: 50}}/>
                        <h5 className="font-weight-bold my-4 text-light">Cooking</h5>
                       </MDBCol>
                    </MDBRow>
                    </div>
                </div>
        </div>
    )
}

export default Activities
