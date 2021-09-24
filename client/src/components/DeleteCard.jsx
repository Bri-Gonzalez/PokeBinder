import './DeleteCard.css';
import Modal from "react-modal";
import { useHistory } from "react-router";
import { useState } from "react";
import { deleteButton } from "../services";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#197092",
    borderRadius: "10px",
  },
};

Modal.setAppElement('#root');


function DeleteCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const history = useHistory();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const handleDelete = async () => {
    await deleteButton(props.id);
    history.push("/");
  }

  return (
    <div>
      {/* <Link to="/"> */}
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={openModal}
          size="lg"
          className="delete-button"
        />
      {/* </Link> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p className="confirm-delete">Confirm delete</p>
        <div className="confirm-border">
          <p className="confirm-message">Are you sure you would like to delete this card?</p>
          <div className="inline-delete-btns">
            <div>
              <button onClick={handleDelete} className="yes-btn">Yes</button>
            </div>
            <div>
              <button onClick={closeModal} className="no-btn">No</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DeleteCard;

