import React from "react";

export default function Header({ menuOpen, setMenuOpen, navLinks }) {
  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">JS</span> Jayasurya
          </a>
          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            id="menuBtn"
            className="menu-btn"
            type="button"
            aria-controls="mobilePanel"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>

        <div id="mobilePanel" className={`mobile-panel ${menuOpen ? "open" : ""}`}>
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a key={`mobile-${link.href}`} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
