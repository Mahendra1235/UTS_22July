import { useState } from 'react';
import logo from '../assets/UTS.SVG.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav>
      <a href="/" className="logo-link">
        <img src={logo} alt="UTS Logo" className="nav-logo" />
      </a>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#verticals" onClick={handleLinkClick}>Verticals</a></li>
        <li><a href="#global" onClick={handleLinkClick}>Global Presence</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
