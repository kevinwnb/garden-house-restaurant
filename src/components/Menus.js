import { Component, Fragment } from "react";
import { Container, Table } from "reactstrap";
import MenusBreakfast from "./MenusBreakfast";
import MenusCatering from "./MenusCatering";
import MenusLunch from "./MenusLunch";
//import image from "../assets/images/IMG_6243-1.jpg";
//import $ from "jquery";

class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "a",
    };

    this.component = <MenusBreakfast />;
  }
  swap(e) {
    document.querySelectorAll("a.active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    switch (e.target.id) {
      case "breakfast":
        this.setState({ a: "breakfast" });
        this.component = <MenusBreakfast />;
        break;

      case "lunch":
        this.component = <MenusLunch />;
        break;

      case "catering":
        this.component = <MenusCatering />;
        break;

      default:
        this.component = <MenusBreakfast />;
        break;
    }

    this.forceUpdate();
  }

  render() {
    return (
      <Fragment>
        <section id={"menus"}>
          <Container>
            <h1>Menus</h1>
            <div className={"nav"}>
              <a
                href={"javascript:void(0)"}
                onClick={(e) => {
                  this.swap(e);
                }}
                id={"breakfast"}
                className={"active"}
              >
                Breakfast
              </a>
              <a
                href={"javascript:void(0)"}
                onClick={(e) => {
                  this.swap(e);
                }}
                id={"lunch"}
              >
                Lunch
              </a>
              <a
                href={"javascript:void(0)"}
                onClick={(e) => {
                  this.swap(e);
                }}
                id={"catering"}
              >
                Catering
              </a>
            </div>
            {this.component}
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Menus;
