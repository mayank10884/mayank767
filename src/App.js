import React, { Component } from "react";
import './App.css';
import Navigation from "./Navigation";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Login from "./components/Login";
import Pricing from "./Pricing";

class App extends Component {
  constructor(props) {
    console.log("Constructor is called before anything else");
    super(props);
    this.state = {university: this.props.university};
  }

  componentDidMount() {
    console.log("Component mounting");
    setTimeout(() => {
      this.setState({university: "JECRC"})
    }, 5000)
  }

  componentDidUpdate() {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log("Component is being unmounted");
  }

  render() {
  return (
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/users" element={<UserDetails />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>

        </Routes>
      </Router>
  );
}
}

export default App;
