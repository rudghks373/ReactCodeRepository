import React from "react";
import Preloader from "./preloader";
import Nav from "./nav";
import Boxintro from "./boxintro";
import bootstrap from "react-bootstrap";
import $ from "jquery";

class mainbody extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container-fluid" style={bootstrap}>
        <Nav />
        <Preloader />
        <Boxintro />
      </div>
    );
  }
}

export default mainbody;
