import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Form from "../../components/Form/Form";
import { fetchCardDetails, updateCard } from "../../services/index";

function EditCard(props) {
  
  const [card, setCard] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [date, setDate] = useState("");
  const [obtained, setObtained] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [set, setSet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchToEdit = async () => {
      const res = await fetchCardDetails(id);
      setCard(res.card);
      setPokemon(res.pokemon);
      setDate(res.date);
      setObtained(res.obtained);
      setType(res.type);
      setDescription(res.description);
      setImage(res.image);
      setSet(res.set);
    };
    fetchToEdit();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      card !== "" &&
      pokemon !== "" &&
      date !== "" &&
      obtained !== "" &&
      type !== "" &&
      description !== "" &&
      image !== "" &&
      set !== ""
    ) {
      const fields = {
        card,
        pokemon,
        date,
        obtained,
        type,
        description,
        image,
        set,
      };
      // eslint-disable-next-line
      const res = await updateCard(id, fields);
      props.closeModal();
      props.setToggle(prevToggle => !prevToggle);
    } else {
      alert("Please fill out all fields")
    }
  }


  return (
    <div>
      <Form
        card={card}
        setCard={setCard}
        pokemon={pokemon}
        setPokemon={setPokemon}
        date={date}
        setDate={setDate}
        obtained={obtained}
        setObtained={setObtained}
        type={type}
        setType={setType}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        set={set}
        setSet={setSet}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default EditCard;
