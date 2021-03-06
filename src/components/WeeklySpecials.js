import { Component, Fragment } from "react";
//import image from "../assets/images/IMG_6243-1.jpg";
//import $ from "jquery";

class WeeklySpecials extends Component {
  render() {
    return (
      <Fragment>
        <section id={"weeklyspecials"}>
          <div className={`background`}>
            <h1>Weekly Specials</h1>
            <i class="scroll-down-icon fas fa-angle-down"></i>
          </div>
          <div style={{ height: "600px", backgroundColor: "black" }}></div>
        </section>
      </Fragment>
    );
  }
}

export default WeeklySpecials;
