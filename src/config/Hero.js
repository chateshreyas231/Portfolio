  
// import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Hero(props) {

//     return(
//         <Jumbotron className="bg-transparent jumbotron-fluid p-0">
//             <Container fluid={true}>
//                 <Row className="justify-content-center py-5">
//                     <Col md={8} sm={12}>
//                         { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
//                         { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
//                         { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
//                     </Col>
//                 </Row>
//             </Container>
//         </Jumbotron>
//     );

// }


// export default Hero;

// import React from 'react';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// import Hero from '../config/Hero';
// import Content from '../config/Content';
// import Axios from 'axios';

// class ContactMe extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message: '',
//             disabled: false,
//             emailSent: null,
//         }
//     }


//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         })
//     }


//     handleSubmit = (event) => {
//         event.preventDefault();

//         console.log(event.target);

//         this.setState({
//             disabled: true
//         });

//         Axios.post('http://localhost:3030/api/email', this.state)
//             .then(res => {
//                 if(res.data.success) {
//                     this.setState({
//                         disabled: false,
//                         emailSent: true
//                     });
//                 } else {
//                     this.setState({
//                         disabled: false,
//                         emailSent: false
//                     });
//                 }
//             })
//             .catch(err => {
//                 console.log(err);

//                 this.setState({
//                     disabled: false,
//                     emailSent: false
//                 });
//             })

//     }


//     render() {
//         return(
//             <div>
//                 <Hero title={this.props.title} />

//                 <Content>
//                     <Form onSubmit={this.handleSubmit}>
//                         <Form.Group>
//                             <Form.Label htmlFor="full-name">Full Name</Form.Label>
//                             <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Form.Label htmlFor="email">Email</Form.Label>
//                             <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Form.Label htmlFor="message">Message</Form.Label>
//                             <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
//                             Send
//                         </Button>


//                         {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
//                         {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
//                     </Form>
//                 </Content>
//             </div>
//         );
//     }

// }

// export default ContactMe;