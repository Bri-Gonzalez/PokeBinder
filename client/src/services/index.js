import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
};

export const fetchCardImages = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
}

export const fetchCardDetails = async (id) => {
  const res = await axios.get(`${URL}/${id}`, config);
  return res.data;
}

export const deleteButton = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data;
}

export const uploadImage = async (e) => {
  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "pokebinder");
  const res = await axios.post("https://api.cloudinary.com/v1_1/dfryxohde/image/upload", data);
  return res.data.url;
  // const file = await res.json()
  // console.log(file)
  // setUpload(file.secure_url)
};

