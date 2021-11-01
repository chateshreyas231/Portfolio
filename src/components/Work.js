import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './Work.css'
import internIcon from '../config/Internship.png'
import Flip from 'react-reveal/Flip';

const Work = () => {
  return (
      <div className="internship">
    <div style={{color:'white', fontSize:50}}>
    <img src={internIcon} style={{maxWidth: 85}}/>
    <br/><b>Internships</b>
    </div>
    
    <MDBRow>
      <MDBCol md='5' className="cards">
      <Flip top duration={1400}>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://mindmatters.ai/wp-content/uploads/sites/2/2020/12/big-data-analytics-through-machine-learning-artificial-intelligence-concept-background-using-deep-learning-algorithms-for-neural-network-data-analysis-abstract-ai-3d-illustration-stockpack-adobe-stock-scaled.jpg')"
          }}
        >
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
              <MDBIcon icon="user-graduate" /> Intern
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Deep Learning</strong>
              </MDBCardTitle>
              <p>
              <strong>Cognifront Academy</strong><br/><br/>
              Jul 2020 – Aug 2020<br/>
                •	Trained on deep learning algorithms and neural networks in python.<br/>
                •	Develop solution ideas with given objective and constraints.
                •	Optimize neural networks for industry applications

              </p>
              <MDBBtn color='pink' href="https://drive.google.com/file/d/1VC4YOxs4FzMTZxGTS7uF84HgWZYF4V1A/view?usp=sharing">
                <MDBIcon icon='clone left' /> View Certificate
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
        </Flip>
      </MDBCol>

      <MDBCol md='5' className="cards">
      <Flip bottom duration={1400}>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://wallpaperaccess.com/full/1728953.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='orange-text'>
              <MDBIcon icon="user-graduate" /> Intern
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Machine Learning</strong>
              </MDBCardTitle>
              <p>
              <strong>Cognifront Academy</strong><br/><br/>
              Jun 2020 – Jul 2020<br/>
            •	Experience in common machine learning algorithms like regression, classification and ensemble models.<br/>
            •	Worked on various types of projects which are used for predictions

              </p>
              <MDBBtn color='deep-orange' href="https://drive.google.com/file/d/1Y9TvlLntYxQsH-nWZc7L0t_c65QVShG8/view?usp=sharing">
                <MDBIcon icon='clone left' /> View Cerificate
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
        </Flip>
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Work;