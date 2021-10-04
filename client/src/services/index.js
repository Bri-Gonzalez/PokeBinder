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
  try {
    const res = await axios.get(URL, config);
    return res.data.records;
  } catch (error) {
    throw error
  }
}

export const fetchCardDetails = async (id) => {
  try {
    const res = await axios.get(`${URL}/${id}`, config);
    return res.data.fields;
  } catch (error) {
    throw error
  }
}

export const newCard = async (fields) => {
  try {
    // eslint-disable-next-line
    const res = await axios.post(URL, { fields }, config);
  } catch (error) {
    throw error
  }
}

export const updateCard = async (id, fields) => {
  try {
    // eslint-disable-next-line
    const res = await axios.put(`${URL}/${id}`, { fields }, config);
  } catch (error) {
    throw error
  }
}

export const deleteButton = async (id) => {
  try {
    const res = await axios.delete(`${URL}/${id}`, config);
    return res.data;
  } catch (error) {
    throw error
  }
}
