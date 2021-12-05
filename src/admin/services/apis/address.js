import axios from 'axios';

const api = 'https://thongtindoanhnghiep.co/api';

export const getListOfProvincesApi = async() => {
    try {
      const res = await axios.get(`${api}/city`);
      return res
    } catch (error) {
      console.log(error)
    }
}

export const getListOfDistrictsApi = async(id) => {
    try {
      const res = await axios.get(`${api}/city/${id}/district`);
      return res
    } catch (error) {
      console.log(error)
    }
}

export const getListOfWardsApi = async(id) => {
    try {
      const res = await axios.get(`${api}/district/${id}/ward`);
      return res
    } catch (error) {
      console.log(error)
    }
}