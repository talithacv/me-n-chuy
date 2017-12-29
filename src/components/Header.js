import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterLoginModal from "./RegisterLoginModal";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <text>Welcome</text>
        <RegisterLoginModal />
      </header>
    );
  }
}

export default Header;
