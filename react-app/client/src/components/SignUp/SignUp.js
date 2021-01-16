import './SignUp.css';
import React, { useCallback } from 'react';
import {withRouter} from 'react-router';
import fapp from '../../firebase_auth/base';
import 'whatwg-fetch';

const SignUp = ({history}) =>{
  const handleSignUp = useCallback( async (event) => {
    event.preventDefault();
    const {username, email, password} = event.target.elements;

    try{
      await fapp.auth().createUserWithEmailAndPassword(email.value, password.value) // actual firebase auth action
      console.log(username.value, email.value);
      const data = {
        "Email":email.value,
        "Username": username.value,
        "wpm_pb": 0,
        "Alphabet": {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0, 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0, 'S': 0, 'T': 0, 'U': 0, 'V': 0, 'W': 0, 'X': 0, 'Y': 0, 'Z': 0, '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '!': 0, '@': 0, '#': 0, '%': 0, '^': 0, '&': 0, '*': 0, '(': 0, ')': 0, '-': 0, '=': 0, '+': 0, '`': 0, '~': 0, '[': 0, ']': 0, '{': 0, '}': 0, '|': 0, ';': 0, ':': 0, "'": 0, '"': 0, ',': 0, '<': 0, '>': 0, '/': 0, '?': 0}
      };
      // send user data to mongo
      // https://mytypee.herokuapp.com/
      // http://localhost:3001
      fetch('https://mytypee.herokuapp.com/newuser', { // Send User Info
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
        });
      history.push('/profile');

    } catch(error){alert(error);}
  }, [history]);


  return(
    <div>
      SignUp
      <form onSubmit={handleSignUp}>
        <input
          name="username"
          className=""
          type="text"
          placeholder="Username"
        />

        <input 
          name="email" 
          className="signup-email" 
          type="email" 
          placeholder="Email" 
        />

        <input
					name="password"
          className="signup-password"
          type="password"
          placeholder="Password"
        />

        <button 
          type="submit" 
          className="signup-btn">
					Sign Up
        </button>
      </form>
    </div>
  )
}

export default withRouter(SignUp);
