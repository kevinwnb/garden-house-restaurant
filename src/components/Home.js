import { Component, Fragment } from "react";
import image from "../assets/images/IMG_6243-1.jpg";
import $ from "jquery";
import { Container } from "reactstrap";

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
          <i className={"scroll-down-icon fas fa-angle-down"}></i>
        </div>
        <div style={{ height: "600px" }}>
          <Container>
            <h3>Welcome to the Garden House Restaurant!</h3>
            <p>
              The Garden House Restaurant & Catering is focused on providing
              high-quality service and customer satisfaction - we will strive to
              exceed your expectations. With a variety of delicious homemade
              delicacies from which to choose, we are confident you will be
              pleased with our menu options, food quality and friendly service.
              Browse our website and if you have any questions, please feel free
              to contact us. We hope to see you again! Check back later for new
              updates to our website. There is much more to come!
            </p>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Home;
