import React, { Component } from "react";
import Social from "../Social";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "thiraboaty@gmail.com",
      Tel: "0834527401",
      Instagram: "BOATY",
    };
  }
  render() {
    const { Email, Tel, Instagram } = this.state;
    return (
      <div className="condiv contact">
        <h1 className="subtopic head">---- Contact ME ----</h1>
        <h3>{Email}</h3>
        <h3>{Tel}</h3>
        <h3>{Instagram}</h3>

        <Social />
      </div>
    );
  }
}
export default Contact;
