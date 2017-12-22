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
import LoginForm from "./LoginForm";
import FacebookLogin from 'react-facebook-login';
import Googlesiindex from "./googlesiindex";

//Facebook logIn 
const responseFacebook = (response) => {
 console.log(response);
}

ReactDOM.render(
 <FacebookLogin
   appId="1088597931155576"
   autoLoad={true}
   fields="name,email,picture"
   onClick={componentClicked}
   callback={responseFacebook} />,
 document.getElementById('demo')
);
//

class MyModal extends React.Component {
  state = {
    isOpen: false
  };

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
 

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>Login</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
          <ModalFooter>
          // {<Login---- />}
          <button className="btn btn-default" onClick={this.hideModal}>
          Close
          </button>
          <button className="btn btn-primary">Save changes</button>
          </ModalFooter>
        </Modal>
        <Button onClick={() => this.setState({ isOpen: true })}>
          OPEN Modal
        </Button>
      
      </div>
    );
  }
}
export default MyModal;
