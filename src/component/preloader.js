import React from "react";
import style from "../assets/css/style.css";

class preloader extends React.Component {
  render() {
    return (
      <div className="preloader" style={style}>
        <div className="pre-container" style={style}>
          <div className="spinner" style={style}>
            test
            <div className="double-bounce1" style={style} />
            <div className="double-bounce2" style={style} />
          </div>
        </div>
      </div>
    );
  }
}

export default preloader;
