import React from "react";
import style from "../assets/css/style.css";
import icons from "../assets/ionicons/css/ionicons.min.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <ul className="box-primary-nav" style={style}>
          <li className="box-label" style={style}>
            About me
          </li>
          <h1>이벤트 연습</h1>
          <input
            type="text CryptoKey"
            name="message"
            placeholder="아무거나 입력해보세요"
            value={this.state.message}
            onChange={e => {
              this.setState({
                message: e.target.value
              });
            }}
          />
          <button
            onClick={() => {
              alert(this.state.message);
              this.setState({
                message: ""
              });
            }}
          >
            확인
          </button>
          <li>
            <a href="index.html">Intro</a>{" "}
            <i className="ion-ios-circle-filled color" />
          </li>
          <li>
            <a href="about.html" style={style}>
              About me
            </a>
          </li>
          <li>
            <a href="services.html" style={style}>
              services
            </a>
          </li>
          <li>
            <a href="portfolio.html" style={style}>
              portfolio
            </a>
          </li>
          <li>
            <a href="contact.html" style={style}>
              contact me
            </a>
          </li>

          <li className="box-label">Follow me</li>

          <li className="box-social" style={style}>
            <a href="#0">
              <i class="ion-social-facebook" style={icons} />
            </a>
          </li>
          <li className="box-social" style={style}>
            <a href="#0">
              <i className="ion-social-instagram-outline" style={icons} />
            </a>
          </li>
          <li className="box-social" style={style}>
            <a href="#0">
              <i className="ion-social-twitter" style={icons} />
            </a>
          </li>
          <li className="box-social" style={style}>
            <a href="#0">
              <i className="ion-social-dribbble" style={icons} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Nav;
