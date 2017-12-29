import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/HomeScreen";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Support from "./screens/Support";
import ProfileScreen from "./screens/ProfileScreen";
import FAQ from "./screens/FAQ";

import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCGP-55EALodVNxm-SaLAbryKsz8s-a65c",
  authDomain: "rmuse-live.firebaseapp.com",
  databaseURL: "https://rmuse-live.firebaseio.com",
  projectId: "rmuse-live",
  storageBucket: "rmuse-live.appspot.com",
  messagingSenderId: "459238602979"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Header className="App-header" />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/User" component={User} /> */}
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/support" component={Support} />
              <Route path="/ProfileScreen" component={ProfileScreen} />
              <Route path="/faq" component={FAQ} />
            </Switch>
          </div>
        </Router>
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
