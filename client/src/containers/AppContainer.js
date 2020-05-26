import React from 'react';
import axios from 'axios';

const useApp = () => {
    const [token, setToken] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        let token = localStorage.getItem("token");
        let username = localStorage.getItem("username");
        
        if( localStorage.getItem("token") ) {
            setToken(localStorage.getItem("token"));
        }

        if( localStorage.getItem("username") ) {
            setUsername(localStorage.getItem("username"));
        }
    }, [])

    let login = (username, password)  => {
        axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;
        axios.post(`/user/login`, {
          username,
          password
        })
        .then( (response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
            setToken(response.data.token);
            setUsername(response.data.username);
            setError(null);
        }).catch((err) => {
          setError({message: err.response.statusText});
        });
      }
    
      let logout = () => {
        setToken(null);
        setUsername(null);
      }

    return {
      username,
      token,
      error,
      login, 
      logout
    }
}

export default useApp;