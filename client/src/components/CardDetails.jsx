import './CardDetails.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardDetails } from "../services";
import { Link } from "react-router-dom";

function CardDetails() {
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCard = async () => {
      setCard(await fetchCardDetails(id));
    }
    getCard();
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <h1 className="details-title">{card?.fields?.title}</h1>
      <div className="card-container">
        <div className="card-image-container">
          <img src={card?.fields?.image} alt={card?.fields?.title} />
        </div>
        <div className="right-details-container">
          <div className="name-type-container">
            <div className="name">
              <h3>{card?.fields?.name}</h3>
            </div>
            <div className="type">
              <p>{card?.fields?.type}</p>
            </div>
          </div>
          <p>{card?.fields?.set}</p>
          <p>{card?.fields?.date}</p>
          <p>{card?.fields?.obtained}</p>
          <p>{card?.fields?.description}</p>
        </div>
      </div>
      <Link to={`/details/${card.id}/edit`} className="edit-button">
            Edit
        </Link>
    </div>
  )
}

export default CardDetails;
