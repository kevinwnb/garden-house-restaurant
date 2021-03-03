import { Component, Fragment } from "react";
import image from "../assets/images/IMG_6243-1.jpg";
import $ from "jquery";

class Home extends Component {
  componentDidMount() {
    function arrowAnimation() {
      $(".scroll-down-icon").animate(
        { top: "+=10px", opacity: "1" },
        500,
        function () {
          $(".scroll-down-icon").animate(
            { top: "-=10px", opacity: "0" },
            500,
            function () {
              arrowAnimation();
            }
          );
        }
      );
    }
    arrowAnimation();
  }
  render() {
    return (
      <Fragment>
        <div className={`background`}>
          <h1>Garden House Restaurant</h1>
          <i class="scroll-down-icon fas fa-angle-down"></i>
        </div>
        <div style={{ height: "600px" }}></div>
      </Fragment>
    );
  }
}

export default Home;
