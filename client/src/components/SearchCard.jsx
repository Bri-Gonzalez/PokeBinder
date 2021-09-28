import "./Search.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
};

function SearchCard() {
  const [card, setCard] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    async function fetchSearch() {
      const res = await axios.get(URL, config);
      setCard(res.data.records);
    }
    fetchSearch();
  }, [toggle])

  function handleSubmit(e) {
    e.preventDefault();
    // setFiltered([]);
    // card.map((card, index)=> {
    //   if (card.fields.pokemon.toLowerCase() === search.toLowerCase()) {
    //     setFiltered((prevState) => [...prevState, card])
    //   } else {
    //     return null;
    //     } return index
    //   })
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          placeholder="Search by Pokémon"
        />
        <button className="search-btn">Search</button>
      </form>
      {card.filter((card) => {
        if (search === "") {
          return null;
        } else if (card.fields.pokemon.toLowerCase().includes(search.toLowerCase())) {
          return card;
        } return false;
      }).map(card => {
            return (
              <div key={card.id} className="searched-card-container">
                <Link to={`/details/${card.id}`} className="searched-card">
                  <img src={card.fields.image} alt={card.fields.card} className="searched-card-image" />
                </Link>
              </div>
            )
          })}
    </div>
  )
}

export default SearchCard;
