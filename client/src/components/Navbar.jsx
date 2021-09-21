import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="top-nav">
      <div className="inline-nav">
        <div>
          PokéApps
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
