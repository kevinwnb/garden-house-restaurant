import { Component, Fragment } from "react";
import { Link, Switch } from "react-router-dom";
import { Container, Table } from "reactstrap";
//import image from "../assets/images/IMG_6243-1.jpg";
//import $ from "jquery";

class MenusLunch extends Component {
  render() {
    return (
      <Fragment>
        <div className={"content"}>
          <p
            className={"text-white text-center"}
            style={{ lineHeight: "2rem" }}
          >
            <b>Sandwiches prepared on our homemade bread:</b>
            <br />
            Sliced Fresh Roast Turkey (all white meat)
            <br />
            Sliced Tender Roast Beef
            <br />
            Smoked Ham & Cheese
            <br />
            Egg Salad
            <br />
            Tuna Salad
            <br />
            Fresh Turkey Salad
            <br />
            **All of the above topped with your favorite
            ingredients.................................................$7.29
            <br />
            <br />
            <b>Fresh Whole Wheat Tortilla Wraps:</b>
            <br />
            Sliced Fresh Roast Turkey (all white meat)
            <br />
            Sliced Tender Roast Beef
            <br />
            Smoked Ham & Cheese
            <br />
            Egg Salad
            <br />
            Tuna Salad
            <br />
            Fresh Turkey Salad
          </p>
        </div>
      </Fragment>
    );
  }
}

export default MenusLunch;
