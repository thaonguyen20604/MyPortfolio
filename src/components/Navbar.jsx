import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/global.css";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
return (
  <>
    <header className="andreas-header">
      {/* Nút 3 gạch hiển thị khi mobile */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>

      {/* Menu trái */}
      <div className="nav-left">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About me</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>

      {/* Logo giữa */}
      <div className="nav-center">
        <h1 className="site-name">Tran Thi Thao Nguyen</h1>
      </div>

      {/* Icon phải */}
      <div className="nav-right">
        <a className="linked" href="https://www.linkedin.com/in/thao-nguyen-tran-441a78320/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/thaonguyen20604" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      {/* Menu overlay khi mobile */}
      <nav className={`nav-menu ${open ? "open" : ""}`}>
        <div className="nav-left-menu">
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setOpen(false)}>About me</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setOpen(false)}>Contact</Link>
        </div>
        <div className="nav-right-menu">
          <a className="linked" href="https://www.linkedin.com/in/thao-nguyen-tran-441a78320/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/thaonguyen20604" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </nav>
    </header>

    <hr className="divider" />
  </>
);
}