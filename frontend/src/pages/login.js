import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Index from '.'
import { response } from 'express';
// import { Dashboard } from './Dashboard';


export default function LoginPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

//   const history = useHistory();

  const handleLogin = () => {
    // Clear any previous error message
    setError('');
    console.log(username)
    console.log(password)
    // Make the API request with the provided username and password
    let api = "https://bnbdevelopers-test-apis.vercel.app/signIn?usrnme=" + username + "&pwd=" + password
    fetch(api)
      .then(response => {
        // Check if the response is successful (HTTP status code in the 200-299 range)
        if (response.ok) {
          // Parse the response as JSON
          // console.log(response.json())
          return response.json();
        } else {
          // Handle error responses
          throw new Error('Failed to login. Please check your credentials.');
        }
      })
      .then(data => {
        // Check if the login was successful
        if (data.isSuccess === 'True') {
          // Perform actions for successful login, e.g., redirect to logged-in page
          console.log('Login successful');
          response.send('hello')
        } else {
          // Handle unsuccessful login
          throw new Error('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the login request
        setError(error.message);
      });
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="form3Example3" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter a valid email address" />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                  className="link-danger">Register</a></p>
              </div>

            </form>
          </div>
        </div>
      </div>
      {error && <p>{error}</p>}
    </section>

  )
}
