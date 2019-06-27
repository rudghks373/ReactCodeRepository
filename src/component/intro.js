import React from "react";

class intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <header>
          <h1>Paradigm Shift</h1>
          <p>
            A free responsive site template designed by{" "}
            <a href="https://twitter.com/ajlkn">@ajlkn</a> /{" "}
            <a href="https://html5up.net">HTML5 UP</a>
          </p>
          <ul class="actions">
            <li>
              <a href="#first" class="arrow scrolly">
                <span class="label">Next</span>
              </a>
            </li>
          </ul>
        </header>
        <div class="content">
          <span class="image fill" data-position="center">
            <img src="images/pic01.jpg" alt="" />
          </span>
        </div>
      </div>
    );
  }
}

export default intro;
