import React from "react";
import Intro from "./intro";
import Frist from "./frist";
import "../assets/sass/main.scss";

class mainbody extends React.Component {
  render() {
    return (
      <div className="is-preload">
        <Intro />
        <Frist />
      </div>
    );
  }
}

export default mainbody;
