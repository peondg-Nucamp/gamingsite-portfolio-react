import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-orbitron";

class BaseHeader extends Component {
  render() {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">All Your Base Games</NavbarBrand>
          {/* <NavbarToggler /> */}
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Our Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BaseHeader;

/* <Nav>
        <Navbar expand="lg" color="dark">
          <div class="container py-2">
            <NavbarBrand href="#">
              <i class="fa fa-gamepad fa-lg">
                <span>All Your Base Games</span>
              </i>
            </NavbarBrand>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#allyourbaseNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex-lg justify-content-lg-end"
              id="allyourbaseNavbar"
            >
              <ul class="navbar-nav">
                <li class="navItem active">
                  <a class="navLink text-center" href="#">
                    <i class="fa fa-globe">
                      {" "}
                      <span>Home </span>
                    </i>
                  </a>
                </li>
                <li class="navItem">
                  <a class="navLink text-center" href="ourTeam.html">
                    <i class="fa fa-users">
                      {" "}
                      <span>Our Team </span>
                    </i>
                  </a>
                </li>
                <li class="navItem">
                  <a class="navLink text-center" href="contactUs.html">
                    <i class="fa fa-mobile">
                      <span>Contact Us</span>
                    </i>
                  </a>
                </li>
                <li class="navItem">
                  <a class="navLink text-center" href="blog.html">
                    <i class="fa fa-pencil-square-o">
                      <span>Blog</span>
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
      </Nav> */
