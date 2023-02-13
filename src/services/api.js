import axios from 'axios';

const URL = 'http://localhost:8000';

export const addBook = async (data) => {
  try {
    return await axios.post(`${URL}/addBook`, data);
  } catch (err) {
    console.log('error while calling add user api', err);
  }
};

export const getBooks = async () => {
  try {
    return await axios.get(`${URL}/getAllBooks`);
  } catch (err) {
    console.log('error while calling get user api', err);
  }
};

export const getBook = async (id) => {
  try {
    return await axios.get(`${URL}/getBook/${id}`);
  } catch (err) {
    console.log('error while calling get user api', err);
  }
};

export const editBook = async (id, data) => {
  try {
    return await axios.put(`${URL}/${id}`, data);
  } catch (err) {
    console.log('error while calling get user api', err);
  }
};

export const deleteBook = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (err) {
    console.log('error while calling get user api', err);
  }
};
