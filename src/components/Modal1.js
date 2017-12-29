import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import firebase from "firebase";
//   import SignupSettings from "./User/Settings/SignupSettings";

// import SignupSettings from"./components/User/Settings/SignupSettings";
// import LoginSettings from "./components/User/Settings/LoginSettings";

class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      Email: "",
      Password: ""
    };
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  ChangeEmail(e) {
    this.setState({ Email: e.target.value });
  }

  ChangePassword(e) {
    this.setState({ Password: e.target.value });
  }

  LogIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(payload => {
        console.log(`look at the unique user heheheh ${payload.uid}`);
      })
      .catch(err => {
        console.log(`oh no an errr hmmm ${err}`);
      });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>Welcome to RmuseLive</ModalTitle>
          </ModalHeader>
          <ModalBody>
            {/* <SignupSettings /> */}
            <h1>Login</h1>
            <input type="text" name="Email" onChange={this.ChangeEmail} />
            <input type="text" name="Password" onChange={this.ChangePassword} />
            <button type="button" class="btn btn-dark" onClick={this.LogIn}>
              Login
            </button>
          </ModalBody>
        </Modal>

        <Button onClick={() => this.setState({ isOpen: true })}>Login</Button>
      </div>
    );
  }
}
export default ModalLogin;
