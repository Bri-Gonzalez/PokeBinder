import './Search.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function SearchCard() {
  const [card, setCard] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchSearch() {
      const res = await axios.get(URL, config)
      setCard(res.data.records)
    }
    fetchSearch()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
          placeholder='Search by Pokémon'
        />
      </form>
      <div>
        {card
          .filter((card) => {
            if (search === '') {
              return null
            } else if (
              card.fields.pokemon.toLowerCase().includes(search.toLowerCase())
            ) {
              return card
            }
            return false
          })
          .map((card) => {
            return (
              <div key={card.id} className='searched-card-container'>
                <Link to={`/details/${card.id}`} className='searched-card'>
                  <img
                    src={card.fields.image}
                    alt={card.fields.card}
                    className='searched-card-image'
                  />
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SearchCard
