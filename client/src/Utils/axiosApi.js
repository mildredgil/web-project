import axios from 'axios';

let token = localStorage.getItem( 'token' );

const axiosUsers = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
    'sessiontoken': token
  }
});

const axiosDefault = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  });


export {
    axiosUsers,
    axiosDefault
}