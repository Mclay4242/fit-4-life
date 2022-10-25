import React, { Component } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import Resources from "./Pages/Resources";
import Login from "./Pages/Login";


class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeUserName(event) {
    this.setState({
      userName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));

    //window.location(/user profile page)
    this.setState({
      userName: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Router>
        <nav class="navbar">
        <div class="navbar__container">
          <Link to="/" id="navbar__logo">Fit for Life </Link>
          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
              <Link to="/" class="navbar__links" id="home-page">Home</Link>
            </li>
            <li class="navbar__item">
              <Link to="/about" class="navbar__links" id="our-story"
              >Our Story</Link>
            </li>
            <li class="navbar__item">
              <Link
                to="/resources"
                class="navbar__links"
                id="resource-center"
                >Resource Center</Link>
            </li>
            <li class="navbar__item">
              <Link
                to="/contact"
                class="navbar__links"
                id="resource-center"
                >Contact</Link>
            </li>
            <li class="navbar__btn">
              <Link to="/login" class="button" id="membership"
                >Make an Appointment</Link>
            </li>
          </ul>
        </div>
      </nav> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <div class="footer">
      <div class="footer__container">
        <ul class="footer__menu">
          <li class="footer__item">
            <Link to="/" class="footer__links" id="footer-home-page">Home</Link>
          </li>

          <li class="footer__item">
            <Link to="/login" class="footer__links" id="membership"
              >New Membership</Link>
          </li>
          <li class="footer__item">
            <Link to="/contact" class="footer__links" id="footer-contact"
              >Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
      </Router>
    );
  }
}

export default App;
