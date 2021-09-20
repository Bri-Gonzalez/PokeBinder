import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-nav" >
      <div className="inline-nav">
        <div>
          PokéApps
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
