import React from "react";
import './Login.css'
const Login = () => {
  return (
    <div className="login_form">
      <div class="conter">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>UserName</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forget Password?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            No a member?
            <span>signup</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
