import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
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
            <div className={"nav"}>
              <Link className={"active"} to={"/menus/breakfast"}>
                Breakfast
              </Link>
              <Link to={"/menus/lunch"}>Lunch</Link>
              <Link to={"/menus/catering"}>Catering</Link>
            </div>
            <div className={"content"}>
              <div className={"item"}>
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
              </div>
              <div className={"item"}>
                <h4 className={"w-100"}>Cinnamon French Toast:</h4>
                <div className={"d-flex"}>
                  <p>prepared with our homemade bread</p>
                  <div className={"ml-auto"}>
                    <p className={"d-block"}>w/bacon $7.99</p>
                    <p className={"d-block"}>w/sausage $7.20</p>
                  </div>
                </div>
              </div>
              <div className={"item"}>
                <h4 className={"w-100"}>Pancakes:</h4>
                <div className={"d-flex"}>
                  <p>"Made From Scratch" Pancakes"</p>
                  <div className={"ml-auto"}>
                    <p className={"d-block"}>w/bacon $7.99</p>
                    <p className={"d-block"}>add blueberries $1.99</p>
                  </div>
                </div>
              </div>
              <div className={"item"}>
                <h4 className={"w-100"}>
                  Ham, Cheddar Cheese & Vegetable Omelette:
                </h4>
                <div className={"d-flex"}>
                  <p>with panfries & homemade toasted bread</p>
                  <p className={"ml-auto"}>$12.99</p>
                </div>
              </div>
              <div className={"item"}>
                <h4 className={"w-100"}>
                  Fresh Vegetable & Cheddar Cheese Omelette:
                </h4>
                <div className={"d-flex"}>
                  <p>with panfries & homemade toasted bread</p>
                  <p className={"ml-auto"}>$10.99</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default WeeklySpecials;
