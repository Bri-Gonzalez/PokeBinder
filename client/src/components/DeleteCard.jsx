import './DeleteCard.css';
import { useHistory } from "react-router";
import { deleteButton } from "../services";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function DeleteCard(props) {
  const history = useHistory();
  
  const handleDelete = async () => {
    await deleteButton(props.id);
    history.push("/");
  }
  return (
    <Link to="/">
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={handleDelete}
        size="lg"
        className="delete-button"
      />
    </Link>
  )
}

export default DeleteCard;

