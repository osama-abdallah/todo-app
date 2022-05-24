import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jwt-decode';
import superagent from 'superagent';
import base64 from 'base-64'
const API = 'https://osama-auth-api.herokuapp.com/';
export const AuthContext = React.createContext();

function Auth(props) {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);

  function validateToken(token) {
    try {
      const user = jwt(token.token);

      if (user) setLoginState(true, token, token);
    } catch (error) {
      setLoginState(false, null, {});
      console.log(`Token Validation Error ${error.message}`);
    }
  }

  function setLoginState(loggedIn, token, user) {
		cookie.save('auth', token);
		setUser(user );
		setLoggedIn(loggedIn);
	}


  async function login(username, password) {
		try {
			const response = await superagent
				.post(`${API}signin`)
				.set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
			validateToken(response.body);
		} catch (error) {
			console.error('Signin Error', error.message);
		}
	}

  async function signup(username, password, role) {
		try {
			const response = await superagent.post(`${API}signup`, {
				username,
				password,
				role,
			});


		} catch (error) {
			console.error('Signup Error', error.message);
		}
	}

  function logout() {
setLoggedIn(false)
setUser({})
cookie.remove("auth")
  }
  const state = {
		loggedIn,
		user,
		setLoggedIn,
		login,
        signup,
		logout,
		setUser,
	};
	


  return (
    <AuthContext.Provider
    value={state}
  >
    {props.children}
  </AuthContext.Provider>
  );
};

export default Auth