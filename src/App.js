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
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
        <div>
          <Sidebar />
          <Wrapper>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/projects" component={Portfolio} />
          </Wrapper>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
