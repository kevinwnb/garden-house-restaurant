import { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  componentDidMount() {
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
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
      <nav id="navbar" className={`_navbar`}>
        <a href="#default" id="logo" className={"logo"}>
          Garden House
        </a>
        <div className={"menu-items"}>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/weeklyspecials" className="link">
            Weekly Specials
          </Link>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
