import { Component, Fragment } from "react";
import image from "../assets/images/IMG_6243-1.jpg";
import $ from "jquery";
import { Col, Container, Row } from "reactstrap";
import image1 from "../assets/images/IMG_6243-1.jpg";
import Parallax from "scroll-parallax";

class Home extends Component {
  componentWillUnmount() {
    // document.querySelector("._navbar").classList.remove("home");
    // document.getElementById("navbar").style.padding = "0px";
    // document.getElementById("logo").style.fontSize = "25px";
    // document.getElementById("navbar").style.backgroundColor =
    //   "rgba(85, 107, 47, 1)";
  }

  componentDidMount() {
    // document.querySelector("._navbar").classList.add("home");
    // document.getElementById("navbar").style.padding = "20px";
    // document.getElementById("navbar").style.backgroundColor =
    //   "rgba(85, 107, 47, 0.7)";
    // document.getElementById("logo").style.fontSize = "35px";

    var p = new Parallax(".parallax-1", { intensity: 70 }).init();

    document.querySelector("._navbar").style.position = "fixed";
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
        <section id={"home"}>
          <h1>Garden House Restaurant</h1>
          <div className={`background`}>
            <i className={"scroll-down-icon fas fa-angle-down"}></i>
          </div>
          <figure
            style={{
              display: "none",
              marginTop: "3rem",
              position: "relative",
              overflow: "hidden",
              height: "50vh",
            }}
          >
            <img className={"parallax-1"} src={image1} />
          </figure>
          <Container className={"my-5"}>
            <h2>Welcome to the Garden House Restaurant!</h2>
            <p className={"text mt-5"}>
              The Garden House Restaurant & Catering is focused on providing
              high-quality service and customer satisfaction - we will strive to
              exceed your expectations.
              <br />
              <br />
              With a variety of delicious homemade delicacies from which to
              choose, we are confident you will be pleased with our menu
              options, food quality and friendly service. Browse our website and
              if you have any questions, please feel free to contact us.
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
                      Tender pieces of boneless chicken breast sauteed with
                      fresh vegetables served with rice pilaf, with a hint of
                      lemon and a fresh homemade dinner roll
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
                          "https://mediaprocessor.websimages.com/width/262/crop/0,0,262x195/staticthumbs3.freewebs.com.s3-website-us-east-1.amazonaws.com/THUMBS/45/b4/45b4b61ff04764e6abcbcc474e303473.JPG"
                        }
                      />
                    </div>
                    <h4>Fish & Chips</h4>
                    <p className={"text"}>
                      Freshly battered haddock atop our popular hand-cut fries
                      with sides of our creamy coleslaw and secret recipe tartar
                      sauce
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <h3 className={"my-5 text-center"} style={{ fontFamily: "verdana" }}>
            Location
          </h3>
          <iframe
            width={"100%"}
            height={"450"}
            style={{
              maxWidth: "600px",
              border: "0",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              marginBottom: "3rem",
            }}
            loading={"lazy"}
            allowfullscreen
            src={
              "https://www.google.com/maps/embed/v1/place?key=AIzaSyDlmJnX8wChkbasK3b7UewLevLJa2L2l2s&q=The+Garden+House,Moncton+NB"
            }
          ></iframe>
        </section>
      </Fragment>
    );
  }
}

export default Home;
