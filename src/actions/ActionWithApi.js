import axios from '../link/axios'


export const getUser = async (endPoint) => {
  try {
    const res = await axios.get(`/${endPoint}`);
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id) => {
  try {
    await axios.delete(`/users/${id}`);
  } catch (error) {
    console.log(error)
  }
}

