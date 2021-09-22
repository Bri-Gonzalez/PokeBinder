import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="top-nav">
      {/* <div className="inline-nav"> */}
        <div>
          <a className="pokeapps-link" href="https://bri-gonzalez.github.io/PokeApps/index.html">PokéApps</a>
        </div>
        <div>
          <Link to="/" className="pokebinder-link">Home</Link>
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar;
