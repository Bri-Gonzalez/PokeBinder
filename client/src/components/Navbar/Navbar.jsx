import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='top-nav'>
      <a
        className='pokeapps-link'
        href='https://bri-gonzalez.github.io/PokeApps/index.html'
      >
        PokéApps
      </a>
      <div className='top-nav-right'>
        <Link to='/' className='pokebinder-link'>
          PokéBinder
        </Link>
        <Link to='/search' className='search-link'>
          Search
        </Link>
      </div>
    </div>
  )
}

export default Navbar
