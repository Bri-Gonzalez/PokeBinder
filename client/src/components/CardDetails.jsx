import './CardDetails.css';
import DeleteCard from './DeleteCard';
import Modal from "react-modal";
import EditCard from "./EditCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardDetails } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";

//-----------------------------------------------------//

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fef5e1",
    borderRadius: "10px",
    border: "2px solid black",
  },
};

Modal.setAppElement('#root');

//-----------------------------------------------------//

function CardDetails() {
  
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const getCard = async () => {
      setDetails(await fetchCardDetails(id));
      setLoading(false);
    }
    getCard();
    // eslint-disable-next-line
  }, [toggle]);


  if (loading) {
    return <BeatLoader />;
  }

  return (
    <div>
      <div className="pokemon-card-container">
        <h1 className="details-title">{details?.fields?.card}</h1>
        <div className="inline-containers">
          <div className="card-image-container">
            <img src={details?.fields?.image} alt={details?.fields?.card} />
          </div>
          <div className="right-details-container">
            <div className="name-type-container">
              <div className="name">
                <p>{details?.fields?.pokemon}</p>
              </div>
              <div className="type">
                <p>{details?.fields?.type}</p>
              </div>
            </div>
            <div className="details">
              <p><b>Card Set:</b> {details?.fields?.set}</p>
              <p><b>Date Collected:</b> {details?.fields?.date}</p>
              <p><b>How card was aquired:</b> {details?.fields?.obtained}</p>
              <p><b>Description:</b><br />{details?.fields?.description}</p>
            </div>
            <div className="inline-btns">
              <FontAwesomeIcon
                onClick={openModal}
                icon={faEdit}
                size="lg"
                className="edit-button"
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <EditCard
                  closeModal={closeModal}
                  setToggle={setToggle}
                />
              </Modal>
              <DeleteCard id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails;
