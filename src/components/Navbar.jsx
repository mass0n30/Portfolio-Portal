
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand-link" to="/">
          Portfolio Portal
        </Link>
        <div className="nav-links">
          <a href="#skills-heading">Skills</a>
          <a href="#projects-heading">Projects</a>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;