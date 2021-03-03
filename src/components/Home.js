import { Component, Fragment } from "react";
import image from "../assets/images/IMG_6243-1.jpg";
import $ from "jquery";

class Home extends Component {
  componentDidMount() {
    var myIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      $(x[myIndex - 1]).fadeIn(1000);
      setTimeout(carousel, 9000);
    }
  }
  render() {
    return (
      <Fragment>
        <div className={`background`}>
          <img
            className={"mySlides"}
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            className={"mySlides"}
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ height: "600px" }}></div>
      </Fragment>
    );
  }
}

export default Home;
