import React, { Component } from "react";
//import { Link } from "react-router-dom";
import  "react-bootstrap";

class Support extends Component {
  render() {
    return (
      <div>
        <h5 className="title mb-4 font-bold">WHO WE ARE</h5>
        <p>
          Do have a question? Here you can get support for any issues you in
          counter.
        </p>
        {/* <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.state.inProgress}
          >
            Submit
          </button> */}
      </div>
    );
  }
}

export default Support;
