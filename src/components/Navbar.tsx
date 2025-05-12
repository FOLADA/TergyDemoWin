// src/components/Navbar.tsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

interface Page {
  label: string;
  path: string;
}

const pages: Page[] = [
  { label: "ნაწარმოებანი", path: "/ნაწარმოებანი" },
  { label: "სიმპოზიუმი", path: "/სიმპოზიუმი" },
  { label: "ესეისტი AI", path: "/ესეისტი%20AI" },
  { label: "რეპეტიტორები", path: "/რეპეტიტორები" },
  { label: "თამაში", path: "/თამაში" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const isLoggedIn = Boolean(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  React.useEffect(() => {
    const onAuthChanged = () => setIsMenuOpen(false);
    window.addEventListener("authChanged", onAuthChanged);
    return () => window.removeEventListener("authChanged", onAuthChanged);
  }, []);

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("loggedInUser");
    window.dispatchEvent(new Event("authChanged"));
    navigate("/შესვლა");
  }, [navigate]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" aria-label="Homepage">
          <img
            src="NavLogo.png"
            alt="Site Logo"
            loading="lazy"
            width={150}
            height={50}
          />
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div
          id="nav-menu"
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
        >
          <ul className="nav-links" role="menubar">
            {pages.map(({ label, path }) => (
              <li key={path} role="none">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="link-underline"></span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-auth">
            {isLoggedIn ? (
              <button
                className="auth-button"
                onClick={handleLogout}
                aria-label="Log out"
              >
                გამოსვლა
                <span className="button-hover-effect"></span>
              </button>
            ) : (
              <NavLink
                to="/შესვლა"
                className="auth-button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Log in"
              >
                შესვლა
                <span className="button-hover-effect"></span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
