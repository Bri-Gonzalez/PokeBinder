import axios from "axios";
import { useState } from "react";
import Form from "./Form"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
};

function AddCard(props) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [obtained, setObtained] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [set, setSet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title !== "" &&
      name !== "" &&
      date !== "" &&
      obtained !== "" &&
      type !== "" &&
      description !== "" &&
      image !== "" &&
      set !== ""
    ) {
      const fields = {
        title,
        name,
        date,
        obtained,
        type,
        description,
        image,
        set,
      };
      // eslint-disable-next-line
      const res = await axios.post(URL, { fields }, config);
      props.closeModal();
      props.setToggle(prevToggle => !prevToggle);
    } else { alert("please fill out all fields")}
  }


  return (
    <div>
      <Form
        title={title}
        setTitle={setTitle}
        name={name}
        setName={setName}
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

export default AddCard;
