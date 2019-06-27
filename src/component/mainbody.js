import React from "react";
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
