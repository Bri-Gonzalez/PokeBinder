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
  return res.data.fields;
}

export const newCard = async (fields) => {
   // eslint-disable-next-line
  const res = await axios.post(URL, { fields }, config);
}

export const updateCard = async (id, fields) => {
  // eslint-disable-next-line
  const res = await axios.put(`${URL}/${id}`, { fields }, config);
}

export const deleteButton = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data;
}
