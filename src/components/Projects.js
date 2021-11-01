import React from "react";
import './Projects.css';
import { MDBBadge } from "mdbreact";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem,  MDBContainer } from "mdbreact";
import a1 from "./photos/Amazon-1.png";import a2 from "./photos/Amazon-2.png";import a3 from "./photos/Amazon-3.png";
import a4 from "./photos/Amazon-4.png";import a5 from "./photos/Amazon-5.png";import a6 from "./photos/Amazon-6.png";import a7 from "./photos/Amazon-7.png";
import b1 from "./photos/b1.png";import b2 from "./photos/b2.png";
import f1 from "./photos/f1.png"; import f2 from "./photos/f2.png";
import g1 from './photos/g1.png';import g2 from './photos/g2.png';import g3 from './photos/g3.png';import g4 from './photos/g4.png';import g5 from './photos/g5.png';import g6 from './photos/g6.png'
import p1 from './photos/p1.png';import p3 from './photos/P3.png';import p4 from './photos/p4.png';
import fd1 from './photos/fd1.jpg';import fd2 from './photos/fd2.jpg';import fd3 from './photos/fd3.jpg';
import etd1 from './photos/ETD/1.png';import etd2 from './photos/ETD/2.png';import etd3 from './photos/ETD/3.png';import etd4 from './photos/ETD/4.png';
import etd6 from './photos/ETD/6.png';import etd8 from './photos/ETD/8.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <div className="project">
    <MDBCard className="my-2 px-3 pb-6 rgba-black-light text-light">

      <MDBCardBody>
      <Fade top duration={1500}>
        <h2 className="h1-responsive font-weight-bold text-center bg-opacity-0.2 my-5">
          PROJECTS
        </h2></Fade>
        <Fade top duration={1500}>
        <h3 className="h3-responsive  text-center bg-opacity-0.2 my-5"> {'<'} React Projects {'/>'}</h3></Fade>

        <Fade left duration={1500}>
        <MDBRow>
          <MDBCol lg="5">

            <MDBView  hover waves>
            <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={false} className="z-depth-1" slide >
                <MDBCarouselInner>
                                <MDBCarouselItem itemId="1">
                                    <MDBView> <img className="d-block w-100" src={b1} alt="First slide" /> </MDBView>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView> <img className="d-block w-100" src={b2} alt="First slide" /> </MDBView>
                                </MDBCarouselItem>
                    </MDBCarouselInner>
            </MDBCarousel>
            </MDBView>

          </MDBCol>

          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-4 font-size-30">
                <MDBIcon icon="film"  className="pr-2" />
                Movie App
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>The Big Screen</strong>
            </h3>
            <p>
                # User Authentication | Login | Logout<br/>
                # API > TheMovieDb<br/>
                # Firebase <br/>
                # ReactJs <br/>
                <MDBBadge color="dark" ><a href="https://github.com/chateshreyas231/The-Big-Screen">Github Link </a><MDBIcon icon="link" /></MDBBadge>
            </p>
           
            <MDBBtn color="success" size="md" className="waves-light " href="https://the-big-screen-9a8e4.web.app/">
              Visit Site
            </MDBBtn>
          </MDBCol>


        </MDBRow>
        </Fade>
        
        <hr className="my-5" />
        <Fade right duration={1500}>

        
         <MDBRow>

          <MDBCol lg="7">

            <a href="#!" className="text-warning">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                E-Commerce Website
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Amazon Clone</strong>
            </h3>
            <p>
                # ReactJs <br/>
                # User Authentication | Login | Logout <br/>
                # Product Cart<br/>
                # Firebase <br/>
                # Stripe Payment API <br/>
                # Real Time Order History<br/>
                <MDBBadge color="dark"><a href="https://github.com/chateshreyas231/amazon-clone">Github Link </a> <MDBIcon icon="link" /></MDBBadge>
            </p>


            <MDBBtn  color="warning"  size="md"  className="mb-lg-0 mb-4 waves-light"  href="https://challenge-3fa5b.web.app/" >
              Visit Site
            </MDBBtn>

          </MDBCol>

          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>

            <MDBCarousel activeItem={1} length={7} showControls={true} showIndicators={false} className="z-depth-1" slide >
                <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView> <img className="d-block w-100" src={a1} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView> <img className="d-block w-100" src={a2} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView> <img className="d-block w-100" src={a3} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <MDBView> <img className="d-block w-100" src={a4} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="5">
                                <MDBView> <img className="d-block w-100" src={a5} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="6">
                                <MDBView> <img className="d-block w-100" src={a6} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="7">
                                <MDBView> <img className="d-block w-100" src={a7} alt="First slide" /> </MDBView>
                            </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>

             
            </MDBView>
          </MDBCol>

        </MDBRow>
</Fade>
        <hr className="my-5" />
        <Fade left duration={1500}>
        <MDBRow>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        
                        <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={false} className="z-depth-1" slide >
                        <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView> <img className="d-block w-100" src={f1} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView> <img className="d-block w-100" src={f2} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                            </MDBCarouselInner>
                            </MDBCarousel>


                        </MDBView>
                    </MDBCol>

                <MDBCol lg="7">
                    <a href="#!" className="text-info">
                    <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="suitcase" className="pr-2" />
                        Social Application
                    </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Facebook Clone</strong>
                    </h3>
                    <p>
                    # Google User Auth <br/>
                    # Firebase <br/>
                    # ReactJs <br/>
                    # Facebook News Feed API <br/>
                    # Live Status Updates<br/>
                    <MDBBadge color="dark"><a href="https://github.com/chateshreyas231/fb-clone">Github Link </a> <MDBIcon icon="link" /></MDBBadge>
                    </p>
                   
                    <MDBBtn  color="info"  size="md"  className="mb-lg-0 mb-4 waves-light" href="https://fir-auth-app-3113b.web.app/" >
                    Visit Site
                    </MDBBtn>
                    
                </MDBCol>
        </MDBRow>
        </Fade>
        <h3 className="h3-responsive  text-center bg-opacity-0.2 my-5"> {'<'} Deep Learning {'/>'}</h3>
        <Fade right duration={1500}>
            <MDBRow>

                    <MDBCol lg="7">

                    <a href="#!" className="pink-text">
                        <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="brain"  className="pr-2" />
                        Internship Project
                        </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0">
                        <strong>Google Stock Price Prediction</strong>
                    </h3>
                    <p>
                        # Recurrent Neural Networks | LSTM <br/>                        
                        # scikit-learn | MatPlot Lib | Keras |TensorFlow<br/>
                        # Training And Testing <br/>
                        # Visualizations <br/>
                        # Jupyter NoteBook  <br/>
                        <MDBBadge color="dark" ><a href="https://github.com/chateshreyas231/Google-Stock-Price-Prediction-Deep-Learning">Github Link </a> <MDBIcon icon="link" /></MDBBadge>
                    </p>


                    </MDBCol>

                    <MDBCol lg="5">
                    <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>

                    <MDBCarousel activeItem={1} length={6} showControls={true} showIndicators={false} className="z-depth-1" slide >
                        <MDBCarouselInner md="6">
                                    <MDBCarouselItem itemId="1">
                                        <MDBView> <img className="d-block w-100 mh-70 " src={g1} alt="First slide" /> </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView> <img className="d-block w-100 mh-70" src={g3} alt="First slide" /> </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="3">
                                        <MDBView> <img className="d-block w-100 mh-70" src={g6} alt="First slide" /> </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="4">
                                        <MDBView> <img className="d-block w-100 mh-70" src={g5} alt="First slide" /> </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="5">
                                        <MDBView> <img className="d-block w-100 mh-70" src={g2} alt="First slide" /> </MDBView>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="6">
                                        <MDBView> <img className="d-block w-100 mh-70" src={g4} alt="First slide" /> </MDBView>
                                    </MDBCarouselItem>
                                    
                        </MDBCarouselInner>
                        </MDBCarousel>

                    
                    </MDBView>
                    </MDBCol>

                    </MDBRow>
                    </Fade>

                    <h3 className="h3-responsive  text-center bg-opacity-0.2 my-5"> {'<'} Machine Learning {'/>'}</h3>
                    <Fade left duration={1500}>
                    <MDBRow>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        
                        <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1" slide >
                        <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={p1} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={p3} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={p4} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                            </MDBCarouselInner>
                            </MDBCarousel>


                        </MDBView>
                    </MDBCol>

                <MDBCol lg="7">
                    <a href="#!" className="text-danger">
                    <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="suitcase" className="pr-2" />
                        Internship Project
                    </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Election Winner Prediction</strong>
                    </h3>
                    <p>
                    # Jupyter Notebook <br/>
                    # Python <br/>
                    # Numpy | Pandas <br/>
                    # Matplot Lib | Seaborn <br/>
                    # SciKit Learn<br/>
                    <MDBBadge color="dark"><a href="https://github.com/chateshreyas231/Election-Prediction-using-machine-Learning">Github Link </a> <MDBIcon icon="link" /></MDBBadge>
                    </p>
                   
                    
                </MDBCol>
        </MDBRow>
        </Fade>
        <hr className="my-5" />
        <Fade right duration={1500}>
                    <MDBRow>
                    <MDBCol lg="7">
                    <a href="#!" className="text-danger">
                    <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="suitcase" className="pr-2" />
                        Personal Project
                    </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Face Mask Detection</strong>
                    </h3>
                    <p>
                    # Python | Numpy<br/>
                    # Keras | Seaborn | Tensorflow <br/>
                    # SciKit Learn<br/>
                    <MDBBadge color="dark"><a href="https://github.com/chateshreyas231/Face-Mask-Detection">Github Link </a> <MDBIcon icon="link" /></MDBBadge>
                    </p>
                   
                    
                </MDBCol>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        
                        <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1" slide >
                        <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={fd1} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={fd2} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={fd3} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                            </MDBCarouselInner>
                            </MDBCarousel>


                        </MDBView>
                    </MDBCol>


        </MDBRow>
        </Fade>
        <h3 className="h3-responsive  text-center bg-opacity-0.2 my-5"> {'<'} Academic Project {'/>'}</h3>
                    <Fade left duration={1500}>
                    <MDBRow>
                    <MDBCol lg="5">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        
                        <MDBCarousel activeItem={1} length={6} showControls={true} showIndicators={false} className="z-depth-1" slide >
                        <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={etd1} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={etd2} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={etd3} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="4">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={etd4} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="5">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={etd6} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="6">
                                            <MDBView> <img className="d-block mw-100 mh-70" src={etd8} alt="First slide" /> </MDBView>
                                        </MDBCarouselItem>
                            </MDBCarouselInner>
                            </MDBCarousel>


                        </MDBView>
                    </MDBCol>

                <MDBCol lg="7">
                    <a href="#!" className="text-danger">
                    <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="suitcase" className="pr-2" />
                        Final Year Engineering Project
                    </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Electricity Theft Detection</strong>
                    </h3>
                    <p>
                    # Anaconda | Spyder <br/>
                    # Python Tkinter <br/>
                    # Numpy | Pandas | Google Colud Vision API<br/>
                    # Matplot Lib | Seaborn <br/>
                    # SciKit Learn | Tensorflow <br/>
                    <MDBBadge color="dark"><a href="https://github.com/chateshreyas231/Election-Prediction-using-machine-Learning">Github Link </a> <MDBIcon icon="link" /></MDBBadge><br/>
                    <MDBBadge color="dark"><a href="https://github.com/chateshreyas231/Election-Prediction-using-machine-Learning">🏆 Best Paper Award Link </a> <MDBIcon icon="link" /></MDBBadge>
                    </p>
                   
                    
                </MDBCol>
        </MDBRow>
        </Fade>
        <hr className="my-5" />
                   
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}

export default Projects;