import React from "react";
import NavBar from "./NavBar";
class Master extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container">
          <NavBar />
        </div>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
export default Master;
