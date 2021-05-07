import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavItem extends Component {
  render() {

    const {item, tolink} = this.props
    return (
      <>
        <li id={item}>
          <Link to={tolink} onClick={this.props.Showitem.bind(this, item)}>{item}</Link>
        
        </li>
      </>
    );
  }
}

export default NavItem;
