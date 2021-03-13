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
import { FaGamepad, FaGlobeAmericas, FaPencilAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { ImMobile } from "react-icons/im";

const headerNavs = [
  {
    id: 0,
    text: "Home",
    path: "/home",
    icon: <FaGlobeAmericas />,
  },
  {
    id: 1,
    text: "About",
    path: "/ourteam",
    icon: <FiUsers />,
  },
  {
    id: 2,
    text: "Contact Us",
    path: "/contactus",
    icon: <ImMobile />,
  },
  {
    id: 3,
    text: "Blog",
    path: "/blog",
    icon: <FaPencilAlt />,
  },
];

// HeaderNavItemComponent - Helper class component for BaseHeader
function HeaderNavItemComponent() {
  return headerNavs.map((headerNavItem) => (
    <NavItem key={headerNavItem.id}>
      <NavLink href={headerNavItem.path}>
        {headerNavItem.icon} <span>{headerNavItem.text}</span>
      </NavLink>
    </NavItem>
  ));
}

class BaseHeader extends Component {
  render() {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
    return (
      <Navbar color="dark" dark expand="md">
        <div className="container py-1">
          <NavbarBrand href="/">
            <FaGamepad /> <span>All Your Base Games</span>
          </NavbarBrand>
          {/* <NavbarToggler /> */}
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <HeaderNavItemComponent />
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default BaseHeader;
