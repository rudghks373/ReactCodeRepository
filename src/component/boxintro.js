import React from "react";
import style from "../assets/css/style.css";

class boxintro extends React.Component {
  render() {
    return (
      <section className="box-intro" style={style}>
        <div className="table-cell">
          <h1 className="box-headline letters rotate-2">
            <span className="box-words-wrapper">
              <b className="is-visible">design.</b>
              <b>&nbsp;coding.</b>
              <b>graphic.</b>
            </span>
          </h1>
          <h5>everything you need to build your personal portfolio</h5>
        </div>

        <div className="mouse" style={style}>
          dd
          <div className="scroll" style={style} />
        </div>
      </section>
    );
  }
}

export default boxintro;
