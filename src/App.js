import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/AppNavbar";
import Home from "./components/Home";
import { Fragment } from "react";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WeeklySpecials from "./components/WeeklySpecials";
import ScrollToTop from "./components/ScrollToTop";
import Menus from "./components/Menus";

function App() {
  return (
    <Fragment>
      <Router>
        <ScrollToTop>
          <AppNavbar />
          <Route path="/" exact component={Home} />
          <Route path="/weeklyspecials" exact component={WeeklySpecials} />
          <Route path="/menus" exact component={Menus} />
        </ScrollToTop>
      </Router>
    </Fragment>
  );
}

export default App;
