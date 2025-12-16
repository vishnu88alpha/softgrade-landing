import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="header">
      <div className="logo">Softgrade Solutions Pvt Ltd</div>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>

          {/* ===== Services ===== */}
          <li className={`dropdown ${openMenu === "services" ? "open" : ""}`}>
            <span
              className="dropdown-label"
              onClick={() => toggleMenu("services")}
            >
              Services <span className="arrow">▾</span>
            </span>

            <ul className="dropdown-menu">
              <li><Link to="/services/mobile-app-development" onClick={closeMenu}>Mobile App Development</Link></li>
              <li><Link to="/services/application-development" onClick={closeMenu}>Application Development</Link></li>
              <li><Link to="/services/software-development" onClick={closeMenu}>Software Development</Link></li>
              <li><Link to="/services/cloud-computing" onClick={closeMenu}>Cloud Computing</Link></li>
              <li><Link to="/services/software-testing" onClick={closeMenu}>Software Testing</Link></li>
            </ul>
          </li>

          {/* ===== Industries ===== */}
          <li className={`dropdown ${openMenu === "industries" ? "open" : ""}`}>
            <span
              className="dropdown-label"
              onClick={() => toggleMenu("industries")}
            >
              Industries <span className="arrow">▾</span>
            </span>

            <ul className="dropdown-menu">
              <li><Link to="/industries/banking" onClick={closeMenu}>Banking</Link></li>
              <li><Link to="/industries/education" onClick={closeMenu}>Education</Link></li>
              <li><Link to="/industries/healthcare" onClick={closeMenu}>Healthcare</Link></li>
              <li><Link to="/industries/insurance" onClick={closeMenu}>Insurance</Link></li>
            </ul>
          </li>

          {/* ===== Technologies ===== */}
          <li className={`dropdown ${openMenu === "technologies" ? "open" : ""}`}>
            <span
              className="dropdown-label"
              onClick={() => toggleMenu("technologies")}
            >
              Technologies <span className="arrow">▾</span>
            </span>

            <ul className="dropdown-menu">
              <li><Link to="/technologies/backend" onClick={closeMenu}>Backend</Link></li>
              <li><Link to="/technologies/devops" onClick={closeMenu}>DevOps & CI/CD</Link></li>
              <li><Link to="/technologies/api" onClick={closeMenu}>API Development</Link></li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
