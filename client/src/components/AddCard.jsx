import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import Form from "./Form"

function AddCard() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [obtained, setObtained] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [set, setSet] = useState("");
  return (
    <div>
      
    </div>
  )
}

export default AddCard;
