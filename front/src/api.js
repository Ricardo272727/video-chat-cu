import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

const get = async (url, params = {}) => {
  try{
    const response = await instance.get(url, { params });
    return response.data;
  } catch(error){
    return error;
  }
}

const put = async (url, data) => {
  try{
    const response = await instance.put(url, data);
    return response.data;
  } catch(error) {
    return error;
  }
}

const post = async (url, data) => {
  try{
    const response = await instance.post(url, data);
    return response.data;
  } catch(error){
    return error;
  }
}

const reqDelete = async (url) => {
  try{
    const response = await instance.delete(url);
    return response.data;
  } catch(error){
    return error;
  }
}

export const getContacts = (userId) => get(`/contacts/${userId}`);
