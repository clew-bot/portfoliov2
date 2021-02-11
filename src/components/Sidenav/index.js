import React from "react";
import { Sidenav, Dropdown, Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";
function Sidebar() {
  const styles = {
    padding: "20px",
    border: "10px dashed grey",
  };
  return (
    <div>
      <Nav justified style={styles}>
        <Nav.Item active icon={<Icon icon="home" />}>
          <Link to="/" className="">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects" className="">
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/books" className="">
            Books
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="">
            About
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Sidebar;
