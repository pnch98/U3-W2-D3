import { Button, Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../data/imgs/logo.png";
import avatar from "../data/imgs/avatar.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class MyNavbar extends Component {
  render() {
    return this.props.editPage ? (
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#" onClick={this.props.setHome}>
            <img src={logo} alt="logo" width={100} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    ) : (
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" onClick={this.props.setHome}>
            <img src={logo} alt="logo" width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link fw-bold fs-7 my-nav-link">
                Home
              </NavLink>
              <NavLink to="/tv-shows" className="nav-link fw-bold fs-7 my-nav-link">
                TV Shows
              </NavLink>
              <NavLink to="/movies" className="nav-link fw-bold fs-7 my-nav-link">
                Movies
              </NavLink>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#" className="text-white fs-5">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link href="#" className="fs-8 text-white fw-bold">
                KIDS
              </Nav.Link>
              <Nav.Link href="#" className="text-white fs-5 me-3">
                <i className="bi bi-bell"></i>
              </Nav.Link>

              <NavDropdown
                title={<i className="bi bi-person-circle fs-4 text-white"></i>}
                id="nav-dropdown"
                drop="start"
              >
                <Link to="/editPage" className="nav-link fw-bold fs-7 ">
                  Edit Profile
                </Link>
                <Link to="/settingsPage" className="nav-link fw-bold fs-7 ">
                  Settings
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default MyNavbar;
