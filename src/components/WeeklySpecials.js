import { Component, Fragment } from "react";
import { Container, Table } from "reactstrap";
//import image from "../assets/images/IMG_6243-1.jpg";
//import $ from "jquery";

class WeeklySpecials extends Component {
  render() {
    return (
      <Fragment>
        <section id={"weeklyspecials"}>
          <h1>Weekly Specials</h1>
          <Container>
            <div className={"info d-flex align-items-center mt-5"}>
              <i class="fas fa-info-circle px-3"></i>
              WE HAVE RECONFIGURED OUR DINING ROOM TO ALLOW FOR SOCIAL
              DISTANCING AND HAVE SET UP TWO HAND SANITIZER STATIONS FOR OUR
              CUSTOMERS' USE. WHENEVER POSSIBLE, WE ASK THAT YOU PHONE IN
              TAKE-OUT ORDERS IN ADVANCE (854-1306), IN ATTEMPT TO SHORTEN WAIT
              TIMES IN THE RESTAURANT.
            </div>
            <Table className={"mt-5"} striped>
              <thead>
                <tr>
                  <th>Weekly Restaurant Specials</th>
                  <th>Specials for the week of March 8 - March 12</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>
                    Toasted Turkey Salad Sandwich w/homemade soup Soups:Turkey
                    Fricot, Turkey Rice, Chili
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>
                    Chicken Stirfry w/rice pilaf & roll Soups:Turkey Fricot,
                    Turkey Rice, Chili
                  </td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>
                    Clubhouse & Cheddar Cheese Platter Soups:Turkey Fricot,
                    Turkey Rice, Chili
                  </td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>
                    Home Fish Cakes w/garden salad & roll Soups:Turkey Fricot,
                    Turkey Rice, Chili
                  </td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>
                    Fish & Chips Bacon Cheeseburger Platter Soups:Turkey Fricot,
                    Turkey Rice, Chili
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default WeeklySpecials;
