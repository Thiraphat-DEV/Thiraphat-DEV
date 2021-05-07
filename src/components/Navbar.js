import React, { Component } from "react";
import NavItem from './NavItem'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItem: "",
    };
  }
  Showitem = (item) => {
      if (this.state.NavItem.length > 0) {
        document.getElementById(this.state.NavItem).classList.remove('show')
      }
      this.setState({
        'NavItem' : item
      }, ()=> {
        document.getElementById(this.state.NavItem).classList.add('show')
      })
  }
  render() {
    return (
      <>
        <nav>
          <ul>            
              <NavItem item="Home" tolink="/" Showitem={this.Showitem}></NavItem>
              <NavItem item="About" tolink="/about" Showitem={this.Showitem}></NavItem>
              <NavItem item="Education" tolink="/Education" Showitem={this.Showitem}></NavItem>
              <NavItem item="Skills" tolink="/Skills" Showitem={this.Showitem}></NavItem>
              <NavItem item="Contact" tolink="/Contact" Showitem={this.Showitem}></NavItem>
          </ul>
        </nav>
      </>
    );
  }
}
export default Navbar;
