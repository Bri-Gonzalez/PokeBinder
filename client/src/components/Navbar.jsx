import './Navbar.css';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="top-nav">
      <div className="inline-nav">
        <div>
          <a className="link" href="https://bri-gonzalez.github.io/PokeApps/index.html">PokéApps</a>
        </div>
        <div>
          <Link to="/" className="link">Home</Link>
        </div>
        {/* <div className="plus-btn-container">
          <Link to="/add">
            <FontAwesomeIcon icon={faPlus} size="1x" className="plus-button"/>
          </Link>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar;
