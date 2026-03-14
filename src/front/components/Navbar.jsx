import { Link } from "react-router-dom";
import logo from "../assets/img/Logo-png.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container">

        <a className="navbar-brand" href="home.html">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>

        <div className="ms-auto">
          <a href="login.html" className="btn custom-btn me-2">
            Iniciar Sesión
          </a>

          <a href="register.html" className="btn custom-btn">
            Registrarse
          </a>
        </div>

      </div>
    </nav>

	);
};