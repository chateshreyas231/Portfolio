import emailjs from "emailjs-com";
import React from 'react';
import './ContactMe.css';
import { MDBContainer, MDBAlert, MDBCol, MDBRow } from 'mdbreact';
import pic from './photos/talk__soon.png'

export default function ContactMe() {



    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_i13rs4h', 'template_xhgwtf7', e.target, 'user_4mZ3QSBwYADR38FL7DWif')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

        alert(
        "Thanks for being awesome! I received your message and would like to thank you for writing to me. I will reply by email as soon as possible. Talk to you soon, 😊  Shreyas Chate"
            );
    }

    return(
    <>
    <strong><h1 style={{color:'white'}}>Reach Me 🚀</h1></strong>     

        <div className="contact__me">
         <MDBRow>
         <MDBCol>
        <div className="contact__left">
        <strong><h1 style={{color:'white'}}>Let's Talk   <img src="https://pngimage.net/wp-content/uploads/2018/05/chat-icon-png-white.png" alt="" style={{maxWidth: 50}}/></h1> </strong>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" > 

                        </input>
                        </div>
                    </div>
                </form>
            </div>
            
            </div>
            </MDBCol>
           
            <div className="verticalLine"/>
            <MDBCol>
              <div className="contact__right">
              <strong><h1 style={{color:'white' , alignContent:'center'}}>Other Handles</h1></strong>
              <div className="icons">

                <img src="https://icons-for-free.com/iconfiles/png/512/gmail+logo+media+mobile+social+icon-1320193180054740262.png" alt="" 
                style={{maxWidth: 55}}/>
                <p>chateshreyas231@gmail.com | shreyaschate2017.it@mmcoe.edu.in</p>

                <a href="https://www.instagram.com/shreyas.chate/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt=""
                style={{maxWidth: 50}}/>
                <p>https://www.instagram.com/shreyas.chate/</p></a> 

                <a href="https://github.com/chateshreyas231">
                <img src="https://rajlab.org/icons/github_white.png" alt="" 
                style={{maxWidth: 50}}/>
                <p>https://github.com/chateshreyas231</p></a>

                <a href="https://www.linkedin.com/in/shreyas-chate-4b6124193/">
                <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"  alt="" 
                style={{maxWidth: 50}}/>
                <p>https://www.linkedin.com/in/shreyas-chate-4b6124193/</p></a> 

                <a href="https://www.facebook.com/shreyas.chate.581">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="" 
                style={{maxWidth: 80}}/>
                <p>https://www.facebook.com/shreyas.chate.581/</p></a> 

              </div>
              </div>
              </MDBCol>
              </MDBRow>
              <div className="avtar__contact">
                <img src={pic} alt=""/>
                </div>
                
        </div>
      

        </>
    )
}