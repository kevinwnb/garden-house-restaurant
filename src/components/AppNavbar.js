import { Component, Fragment } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import $ from "jquery";

class AppNavbar extends Component {
  componentDidMount() {
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.querySelector("._navbar").classList.contains("home")) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("navbar").style.padding = "0px";
          document.getElementById("logo").style.fontSize = "25px";
          document.getElementById("navbar").style.backgroundColor =
            "rgba(85, 107, 47, 1)";
        } else {
          document.getElementById("navbar").style.padding = "20px";
          document.getElementById("navbar").style.backgroundColor =
            "rgba(85, 107, 47, 0.7)";
          document.getElementById("logo").style.fontSize = "35px";
        }
      }
    }
  }

  getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  }

  openNav() {
    document.getElementById("mySidenav").style.right = "0px";
    $(".absoluter").fadeIn();
    document.querySelector("html, body").style.overflowY = "hidden";
    if ($(document).height() > $(window).height()) {
      document.querySelector("html, body").style.paddingRight =
        this.getScrollbarWidth() + "px";
      document.querySelector("._navbar .menu-items").style.paddingRight =
        this.getScrollbarWidth() + "px";
    }
  }

  closeNav() {
    document.querySelector("._navbar .menu-items").style.paddingRight = "0px";
    document.querySelector("html, body").style.paddingRight = "0px";
    document.getElementById("mySidenav").style.right = "-300px";
    $(".absoluter").fadeOut();
    document.querySelector("html, body").style.overflowY = "visible";
  }

  render() {
    return (
      <Fragment>
        <div
          className={"absoluter"}
          onClick={() => {
            this.closeNav();
          }}
        ></div>
        <div id="mySidenav" className={"sidenav"}>
          <a
            href={"javascript:void(0)"}
            className={"closebtn"}
            onClick={() => {
              this.closeNav();
            }}
          >
            &times;
          </a>

          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/"
            className="link"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/weeklyspecials"
            className="link"
          >
            Weekly Specials
          </Link>
          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/menus"
            className="link"
          >
            Our Menus
          </Link>
          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/weeklyspecials"
            className="link"
          >
            About
          </Link>
          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/weeklyspecials"
            className="link"
          >
            Facts
          </Link>
          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/weeklyspecials"
            className="link"
          >
            Gallery
          </Link>
          <Link
            onClick={() => {
              this.closeNav();
            }}
            to="/weeklyspecials"
            className="link"
          >
            Contact
          </Link>
        </div>
        <nav id="navbar" className={`_navbar`}>
          <a href="#default" id="logo" className={"logo"}>
            Garden House
          </a>
          <div className={"menu-items"}>
            <a
              href={"javascript:void(0)"}
              className={"link"}
              onClick={() => {
                this.openNav();
              }}
            >
              <i className={"menu-icon fas fa-bars"}></i>
            </a>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default AppNavbar;
