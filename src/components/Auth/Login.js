import React from "react";
import './Login.css'
const Login = () => {
  return (
    <div className="login_form">
      <div class="conter">
        <div className="login_logo">
          <img src="/images/matka.png" alt="" />
        </div>
        <h1>Login</h1>
        <form>
          <div className="input_wrapper">
            <label htmlFor="Login ID">Login ID: </label>
              <input type="text" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="Login ID">password: </label>
              <input type="text" />
          </div>
          <div className="input_wrapper">
            <button className="btn btn-login" type="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
