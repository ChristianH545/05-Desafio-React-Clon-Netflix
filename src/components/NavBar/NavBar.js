import React from "react";
import logo2 from "../../exports/Imagenes";
import { Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBar" variant="dark">
        <Container>
          <Navbar.Brand className="logo">
            <Link to="/">
              <img src={logo2} alt="" width="120" height="66" />
            </Link>
          </Navbar.Brand>
          <div className="nav me-auto">
            <div className="link-nav">
              <NavLink className="link-nav" to="/">
                Inicio
              </NavLink>
            </div>
            <div className="link-nav">
              <NavLink className="link-nav" to="/series">
                Series
              </NavLink>
            </div>
            <div className="link-nav">
              <NavLink className="link-nav" to="/peliculas">
                Películas
              </NavLink>
            </div>
            <div className="link-nav">
              <NavLink className="link-nav" to="/novedadespopulares">
                Novedades populares
              </NavLink>
            </div>
            <div className="link-nav">
              <NavLink className="link-nav" to="/milista">
                Mi lista
              </NavLink>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
