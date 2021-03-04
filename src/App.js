import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/AppNavbar";
import Home from "./components/Home";
import { Fragment } from "react";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WeeklySpecials from "./components/WeeklySpecials";

function App() {
  return (
    <Fragment>
      <Router>
        <AppNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/weeklyspecials" exact component={WeeklySpecials} />
      </Router>
    </Fragment>
  );
}

export default App;
