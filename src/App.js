import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import logo from './images/Head.png'
import {ReactComponent as PinkBlob} from './blobs/blob1.svg';
import {ReactComponent as GreenBlob} from './blobs/blob2.svg'
import './App.css';

import Thumbnails from "./components/Thumbnails";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from './pages/ContactPage';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: 'Sam Scudder',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Projects', path: '/projects'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Hello',
        subTitle: "don't know what this is",
        text: "Checkout projects Below"
      },
      about: {
        title: "About"
      },
      contact: {
        title: "Hello"
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Row className="blob d-md-block d-none">
            <PinkBlob />     
          </Row>
          <Navbar bg="transparent" expand="md">
            <Navbar.Brand href="/">
              <img className="logo-photo" src={logo} alt="Sam Scudder" />
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" />
            <Navbar.Collapse id="navbar-toggle-sm">
              <Nav>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}
           text={this.state.home.text}/>}/>
           <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle}
           text={this.state.home.text}/>}/>
           <Route path="/contact" exact render={() => <ContactPage title={this.state.about.title} subTitle={this.state.about.subTitle}
           text={this.state.home.text}/>}/>
           
          <Thumbnails />
        </Container>
      </Router>
    
    );
  }
}

export default App;
