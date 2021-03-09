import { Component, Fragment } from "react";
import { Container, Table } from "reactstrap";
//import image from "../assets/images/IMG_6243-1.jpg";
//import $ from "jquery";

class WeeklySpecials extends Component {
  render() {
    return (
      <Fragment>
        <section id={"menus"}>
          <Container>
            <h1>Menus</h1>
            <h4 className={"w-100"}>
              BREAKFAST Traditional Garden House Breakfast:
            </h4>
            <div className={"d-flex"}>
              <p>
                2 eggs any style, choice of bacon or sausage, panfries &
                homemade toasted bread 8am-11am
              </p>
              <p className={"ml-auto"}>$9.99</p>
            </div>
            <h4 className={"w-100"}>
              BREAKFAST Traditional Garden House Breakfast:
            </h4>
            <div className={"d-flex"}>
              <p>
                2 eggs any style, choice of bacon or sausage, panfries &
                homemade toasted bread 8am-11am
              </p>
              <p className={"ml-auto"}>$9.99</p>
            </div>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default WeeklySpecials;
