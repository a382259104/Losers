import axios from "axios";
const BASE_API = process.env.REACT_APP_API_BASE;
const USERS_API = `${BASE_API}/api/users`;

// TBD
export interface User {
  _id: string;
  username: string,
  password: string,
  email: string
};

export const signin = async (credentials: User) => {
  console.log(`users_api:${USERS_API}`)
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};


export const register = async (credentials: User) => {
  const response = await axios.post(`${USERS_API}/register`, credentials);
  return response.data;
};

export const profile = async () => {
  console.log(`Hitting profile page ${USERS_API}`)
    const response = await axios.post(`${USERS_API}/profile`);
    console.log(`This is the Profile${response}`)
    return response.data;
  };