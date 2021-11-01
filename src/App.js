import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import Main from './components/Main'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './config/configParticles';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Activities from './components/Activities';
import ContactMe from './components/ContactMe';
import Blog from './components/Blog';
import Connect from './components/Connect';
  

function App() {
  return (
    <Router>
    <div className="App" >

      <div style={{ position: 'absolute' }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <NavBar/>
         <Switch >

            <Route exact path="/" > <Main/> </Route>
            <Route exact path="/about-me" > <AboutMe/> </Route>
            <Route exact path="/education" > <Education/></Route>
            <Route exact path="/internships" > <Work/> </Route>
            <Route exact path="/project"> <Projects/> </Route>
            <Route exact path="/certificates"> <Certifications/> </Route>
            <Route exact path="/skills"><Skills/></Route>
            <Route exact path="/connect"><Connect/></Route>
            <Route exact path="/skills"><Skills/></Route>
            <Route exact path="/activities"><Activities/></Route>
            <Route exact path="/contact-me"><ContactMe/></Route>
            <Route exact path="/blog"><Blog/></Route>
          </Switch>
  
    </div>
    </Router>
  );
}

export default App;
