import './CardDetails.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardDetails } from "../services";
import { Link } from "react-router-dom";
import DeleteCard from './DeleteCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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
        <div className="inline-containers">
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
            <p><b>Card Set:</b> {card?.fields?.set}</p>
            <p><b>Date Collected:</b> {card?.fields?.date}</p>
            <p><b>How I got card:</b> {card?.fields?.obtained}</p>
            <p><b>Description:</b> {card?.fields?.description}</p>
            <div className="inline-btns">
              <Link to={`/details/${card.id}/edit`} >
                <FontAwesomeIcon icon={faEdit} size="lg" className="edit-button"/>
              </Link>
              <DeleteCard id={id} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="inline-btns">
        <Link to={`/details/${card.id}/edit`} >
          <FontAwesomeIcon icon={faEdit} size="lg" className="edit-button"/>
        </Link>
        <DeleteCard id={id} />
      </div> */}
    </div>
  )
}

export default CardDetails;
