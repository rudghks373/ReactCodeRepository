import React from "react";
import Intro from "./intro";
import Frist from "./frist";

class wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Intro />
        <Frist />
      </div>
    );
  }
}

export default wrapper;
