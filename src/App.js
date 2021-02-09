// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import rsuite from "rsuite";
import Sidebar from "./components/Sidenav";
import "rsuite/dist/styles/rsuite-default.css";
import Books from "./pages/Books";
import About from "./pages/About";
import Homepage from "./pages/Home";
import Portfolio from "./pages/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Router>
        <div>
          <Sidebar />
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/books" component={Books} /> */}
          <Route exact path="/projects" component={Portfolio} />
        </div>
      </Router>
    </>
  );
}

export default App;
