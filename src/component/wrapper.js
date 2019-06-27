import React from "react";
import Intro from "./intro";
import Frist from "./frist";

class wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: "is-loading"
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Intro onToggleMenu={this.handleToggleMenu} />
        <Frist />
      </div>
    );
  }
}

export default wrapper;
