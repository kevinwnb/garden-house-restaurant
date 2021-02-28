import { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

class AppNavbar extends Component {
  componentDidMount() {
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("navbar").style.backgroundColor =
          "rgba(50,205,50,1)";
      } else {
        document.getElementById("navbar").style.padding = "30px";
        document.getElementById("navbar").style.backgroundColor =
          "rgba(50,205,50,0.6)";
        document.getElementById("logo").style.fontSize = "35px";
      }
    }
  }
  render() {
    return (
      <nav id="navbar" className={`navbar`}>
        <a href="#default" id="logo" className={"logo"}>
          Garden House
        </a>
        <div className={"menu-items"}>
          <a className={"link"} href="javascript:void(0)">
            One
          </a>
          <a className={"link"} href="javascript:void(0)">
            Two
          </a>
          <a className={"link"} href="javascript:void(0)">
            Three
          </a>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
