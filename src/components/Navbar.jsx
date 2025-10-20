// Navbar.jsx
import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll.js";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const [scrolled, scrollY] = useScroll();
  const navbarClasses = `navbar navbar-expand-lg text-white sticky-top ${
    scrollY > 0 ? "bg-dark" : "bg-danger"
  }`;

  return (
    <nav
      ref={scrolled}
      className={navbarClasses}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Sezione sinistra */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                Selfworks
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/posts">
                  Posts
                </Link>
              </li>
            )}
          </ul>

          {/* Sezione destra */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Registrati
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Accedi
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">Ciao, {user.name}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
