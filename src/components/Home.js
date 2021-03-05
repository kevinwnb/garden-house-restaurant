import { Component, Fragment } from "react";
import image from "../assets/images/IMG_6243-1.jpg";
import $ from "jquery";
import { Col, Container, Row } from "reactstrap";

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
        <Container className={"mt-5"}>
          <h3>Welcome to the Garden House Restaurant!</h3>
          <p className={"text"}>
            The Garden House Restaurant & Catering is focused on providing
            high-quality service and customer satisfaction - we will strive to
            exceed your expectations.
            <br />
            <br />
            With a variety of delicious homemade delicacies from which to
            choose, we are confident you will be pleased with our menu options,
            food quality and friendly service. Browse our website and if you
            have any questions, please feel free to contact us.
            <br />
            <br />
            We hope to see you again! Check back later for new updates to our
            website. There is much more to come!
          </p>
        </Container>

        <div className={"pre-popular-menu-items"}>
          <Container>
            <h3>Some of our more popular menu items...</h3>
            <Row className={"popular-menu-items justify-content-center"}>
              <Col md="4">
                <div className={"mx-auto mx-md-3"}>
                  <div className={"text-center"}>
                    <img
                      src={
                        "https://mediaprocessor.websimages.com/width/262/crop/0,0,262x195/staticthumbs3.freewebs.com.s3-website-us-east-1.amazonaws.com/THUMBS/30/ed/30ede8f611b67226c5ff8bfab2157bb8.JPG"
                      }
                    />
                  </div>
                  <h4>Chicken Sizzler</h4>
                  <p className={"text"}>
                    Tender pieces of boneless chicken breast sauteed with fresh
                    vegetables served with rice pilaf, with a hint of lemon and
                    a fresh homemade dinner roll
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className={"mx-auto mx-md-3"}>
                  <div className={"text-center"}>
                    <img
                      src={
                        "https://mediaprocessor.websimages.com/width/262/crop/0,5,262x195/staticthumbs3.freewebs.com.s3-website-us-east-1.amazonaws.com/THUMBS/c4/c0/c4c09312dce4c24389b43781229d4717.JPG"
                      }
                    />
                  </div>
                  <h4>Fish Chowder</h4>
                  <p className={"text"}>
                    A rich cream based chowder with fresh chunks of haddock,
                    served with a fresh homemade dinner roll
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className={"mx-auto mx-md-3"}>
                  <div className={"text-center"}>
                    <img
                      src={
                        "https://mediaprocessor.websimages.com/width/262/crop/0,0,262x195/staticthumbs3.freewebs.com.s3-website-us-east-1.amazonaws.com/THUMBS/30/ed/30ede8f611b67226c5ff8bfab2157bb8.JPG"
                      }
                    />
                  </div>
                  <h4>Chicken Sizzler</h4>
                  <p className={"text"}>
                    Tender pieces of boneless chicken breast sauteed with fresh
                    vegetables served with rice pilaf, with a hint of lemon and
                    a fresh homemade dinner roll
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Home;
