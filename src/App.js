import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/AppNavbar";
import Home from "./components/Home";
import { Fragment } from "react";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <Fragment>
      <AppNavbar />
      <Home />
    </Fragment>
  );
}

export default App;
