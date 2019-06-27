import React from "react";

const Header = props => (
  <nav>
    <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
      Menu
    </a>
  </nav>
);

class intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <header>
          <h1>Paradigm Shift</h1>
          <Header />
          <p>
            A free responsive site template designed by{" "}
            <a href="https://twitter.com/ajlkn">@ajlkn</a> /{" "}
            <a href="https://html5up.net">HTML5 UP</a>
          </p>
          <ul className="actions">
            <li>
              <a href="#first" className="arrow scrolly">
                <span className="label">Next</span>
              </a>
            </li>
          </ul>
        </header>
        d
      </div>
    );
  }
}

export default intro;
