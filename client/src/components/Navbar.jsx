import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <div>
          Logo
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
