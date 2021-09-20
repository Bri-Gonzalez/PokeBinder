import { useHistory } from "react-router";
import { deleteButton } from "../services";

function DeleteCard(props) {
  const history = useHistory();
  
  const handleDelete = async () => {
    await deleteButton(props.id);
    history.push("/");
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteCard;
