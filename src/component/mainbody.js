import React from "react";
import Intro from "./intro";
import Frist from "./frist";
import Copyright from "./copyright";
import Wrapper from "./wrapper";

class mainbody extends React.Component {
  render() {
    return (
      <div className="mainbody">
        <Wrapper />
        <Copyright />
      </div>
    );
  }
}

export default mainbody;
