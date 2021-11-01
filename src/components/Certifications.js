import React from 'react'
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import './Certifications.css'
import deep from './photos/deep.png';
import alogo from './photos/alogo.png';
import clogo from './photos/clogo.png';import database from './photos/database.png'
import cognifront from './photos/cognifront.png'

function Certifications() {
    return (
        <div className="certifications">
        <section className="text-center my-5">
        <Fade top>
        <h2 className="h1-responsive font-weight-bold text-light my-5">
          Certifications
        </h2></Fade>
        <MDBRow>
        

          <MDBCol md="4">
          <Fade left duration={1200}>
            <img src="https://static.djangoproject.com/img/logos/django-logo-negative.svg"  style={{maxWidth:130}} /><span>""</span>
            <img src=" https://www.onlinecoursereport.com/wp-content/uploads/2020/12/coursera-logo-full-rgb-1024x331.png"  style={{maxWidth:150}}/>
            <h5 className="font-weight-bold my-4 text-light"><br/>Django for Everybody</h5>
            <p className="grey-text mb-md-0 mb-5">
              Date: 12 Nov 2020<br/>
              <a href="https://www.coursera.org/verify/specialization/HB2MLAXRDE46" class="text-decoration-none">View Cerificate</a>
              <br/><br/><br/>
            </p>
            </Fade>
          </MDBCol>
          


          <MDBCol md="4">
          <Flip left duration={1200}>
          <img src={alogo}  style={{maxWidth:100 }} />
          <img src=" https://www.onlinecoursereport.com/wp-content/uploads/2020/12/coursera-logo-full-rgb-1024x331.png"  style={{maxWidth:150}}/>
            <h5 className="font-weight-bold my-4 text-light">AWS Fundamentals: Going Cloud-Native</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 17 Sept 2020<br/>
            <a href="https://www.coursera.org/verify/Q5GCQ8MB5T5F" class="text-decoration-none">View Cerificate</a>
            </p>
            </Flip>
          </MDBCol>


          <MDBCol md="4">
          <Fade right duration={1200}>
          <img src={deep}  style={{maxWidth:80 }} /><span>"_|__"</span>
          <img src={cognifront}  style={{maxWidth:120 }} />
            <h5 className="font-weight-bold my-4 text-light">Certificate of Deep Learning Internship</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 2 Sept 2020<br/>
              <a href="https://drive.google.com/file/d/1VC4YOxs4FzMTZxGTS7uF84HgWZYF4V1A/view?usp=sharing" class="text-decoration-none">View Cerificate</a>
            </p>
            </Fade>
          </MDBCol>


          <MDBCol md="4">
          <Fade left duration={1200}>
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/data-science-50-1170843.png"  style={{maxWidth:80 }} /><span>"____"</span>
          <img src="https://greyatomcom.gumlet.net/wp-content/uploads/2020/11/big-logo-white.png?q=70&compress=true&quality=90&w=210&dpr=2.0"  style={{maxWidth:120 }} />
            <h5 className="font-weight-bold my-4 text-light">Python For Data Science</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 31 Jul 2020<br/>
              <a href="https://drive.google.com/file/d/1pNPnxKJEcXZeiQVvU8ZJr-ceiYEeiIn1/view?usp=sharing" class="text-decoration-none">View Cerificate</a>
            </p>
            </Fade>
          </MDBCol>

        <br/>

        <MDBCol md="4">
        <Flip right duration={1200}>
          <img src="https://cdn0.iconfinder.com/data/icons/web-related/72/__chat_bot._bots_roboto_spam_spam_check_automated_assistant-512.png"  style={{maxWidth:80 }} /><span>"____"</span>
          <img src={cognifront}  style={{maxWidth:120 }} />
            <h5 className="font-weight-bold my-4 text-light">Certificate of Machine Learning Internship</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 5 Jul 2020 <br/>
              <a href="https://drive.google.com/file/d/1Y9TvlLntYxQsH-nWZc7L0t_c65QVShG8/view?usp=sharing" class="text-decoration-none">View Cerificate</a><br/><br/><br/>
            </p>
            </Flip>
          </MDBCol>


          <MDBCol md="4">
          <Fade right duration={1200}>
          <img src="https://www.python.org/static/community_logos/python-logo-generic.svg"  style={{maxWidth:150 }} /><span>"____"</span>
          <img src="https://1.bp.blogspot.com/-AXJNe6INoDI/Wmd2_m8rypI/AAAAAAAAFyw/mWZ55PR-KisN4AaFuxDiSnzwxucrOKuXwCLcBGAs/w1200-h630-p-k-no-nu/spoken%2Btutorials.jpg"  
          style={{maxWidth:150 }} />
         
            <h5 className="font-weight-bold my-4 text-light">Python Training • Spoken Tutorial, IIT Bombay</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 1 Feb 2020<br/>
              <a href="https://drive.google.com/file/d/1dibZloJdMB8SHUyTeCuAks8myw9Cl4GU/view?usp=sharing" class="text-decoration-none">View Cerificate</a>
            </p>
            </Fade>
          </MDBCol>


          <MDBCol md="4">
          <Fade left duration={1200}>
          <img src="https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png"  style={{maxWidth:80 }} /><span>"____"</span>
          <img src="https://1.bp.blogspot.com/-AXJNe6INoDI/Wmd2_m8rypI/AAAAAAAAFyw/mWZ55PR-KisN4AaFuxDiSnzwxucrOKuXwCLcBGAs/w1200-h630-p-k-no-nu/spoken%2Btutorials.jpg"  
          style={{maxWidth:150 }} />
            <h5 className="font-weight-bold my-4 text-light">C++ Training • Spoken Tutorial, IIT Bombay</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 9 Aug 2019 <br/>
              <a href="https://drive.google.com/file/d/1pyZL_iKrUTclOvq7JHxqnzYYGrP0OvmU/view?usp=sharing" class="text-decoration-none">View Cerificate</a>
            </p>
            </Fade>
          </MDBCol>
          

          <MDBCol md="4">
          <Flip left duration={1200}>
          <img src={database}  style={{maxWidth:80 }} /><span>"____"</span>
          <img src="https://1.bp.blogspot.com/-AXJNe6INoDI/Wmd2_m8rypI/AAAAAAAAFyw/mWZ55PR-KisN4AaFuxDiSnzwxucrOKuXwCLcBGAs/w1200-h630-p-k-no-nu/spoken%2Btutorials.jpg"  
          style={{maxWidth:150 }} />
            <h5 className="font-weight-bold my-4 text-light">RDBMS Training • Spoken Tutorial, IIT Bombay</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 20 Feb 2019<br/>
              <a href="https://drive.google.com/file/d/1SGye-PpihY1azSUlAQL50TV2dKCtOvcm/view?usp=sharing" class="text-decoration-none">View Cerificate</a>
            </p>
            </Flip>
          </MDBCol>


          <MDBCol md="4">
          <Fade right duration={1200}>
          <img src={clogo}
          style={{maxWidth:80}} /><span>"____"</span>
          <img src="https://1.bp.blogspot.com/-AXJNe6INoDI/Wmd2_m8rypI/AAAAAAAAFyw/mWZ55PR-KisN4AaFuxDiSnzwxucrOKuXwCLcBGAs/w1200-h630-p-k-no-nu/spoken%2Btutorials.jpg"  
          style={{maxWidth:150 }} />
            <h5 className="font-weight-bold my-4 text-light">C Training • Spoken Tutorial, IIT Bombay</h5>
            <p className="grey-text mb-md-0 mb-5">
            Date: 6 Oct 2018<br/>
              <a href="https://drive.google.com/file/d/1Nx02mvPU558brt1bGtaLUQUgexqRYARy/view?usp=sharing" class="text-decoration-none">View Cerificate</a>
            </p>
            </Fade>
          </MDBCol>

        </MDBRow>

      </section>

      </div>
    )
}

export default Certifications
