import { Component, Fragment } from "react";
import { Link, Switch } from "react-router-dom";
import { Container, Table } from "reactstrap";
//import image from "../assets/images/IMG_6243-1.jpg";
//import $ from "jquery";

class MenusCatering extends Component {
  render() {
    return (
      <Fragment>
        <div className={"content"}>
          <div className={"item"}>
            <h4 className={"w-100"}>Catering:</h4>
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
          <div className={"item"}>
            <h4 className={"w-100"}>
              Toasted Western & Cheddar Cheese Sandwich:
            </h4>
            <div className={"d-flex"}>
              <p>with panfries</p>
              <p className={"ml-auto"}>$9.49</p>
            </div>
          </div>
          <div className={"item"}>
            <h4 className={"w-100"}>Garden House Breakfast Bagel Deluxe:</h4>
            <div className={"d-flex"}>
              <p>Bacon, fried egg & cheddar cheese</p>
              <div className={"ml-auto"}>
                <p className={"d-block"}>$4.99</p>
                <p className={"d-block"}>w/panfries $6.99</p>
              </div>
            </div>
          </div>
          <div className={"item"}>
            <h4 className={"w-100"}>Fresh Whole Wheat Breakfast Wrap:</h4>
            <div className={"d-flex"}>
              <p>
                Scrambled egg, panfries, cheese & bacon in a whole wheat
                tortilla wrap
              </p>
              <p className={"ml-auto"}>$5.99</p>
            </div>
          </div>
          <div className={"item"}>
            <h4 className={"w-100"}>Old Fashioned Oatmeal with Brown Sugar:</h4>
            <div className={"d-flex"}>
              <p>and homemade toasted bread</p>
              <p className={"ml-auto"}>$6.49</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MenusCatering;
