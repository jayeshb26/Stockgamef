import React from "react";
import "./SimpleLogin.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logIn } from "../../Redux/Auth/AuthAction";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  useEffect(() => {}, [loginState]);

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.userName) {
      newErrors.userName = "Username is required";
      valid = false;
    } else {
      newErrors.userName = "";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };
  const handleLogin = async() =>{
    if (loginState.loggedIn) {
      navigate("/market");
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(logIn(formData));
    } else {
      console.log("Form has errors");
    }
  };

  useEffect(() => {
    if (loginState.error) {
      toast.error(loginState.error);
    }
  }, [loginState.error]);

  useEffect(() => {
    handleLogin();
  }, [loginState.loggedIn, navigate]);

  const addFocusClass = (event) => {
    const parent = event.target.parentNode.parentNode;
    parent.classList.add("focus");
  };

  const removeFocusClass = (event) => {
    const parent = event.target.parentNode.parentNode;
    if (event.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input) => {
      input.addEventListener("focus", addFocusClass);
      input.addEventListener("blur", removeFocusClass);

      return () => {
        input.removeEventListener("focus", addFocusClass);
        input.removeEventListener("blur", removeFocusClass);
      };
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="login_screen_wrapper">
            <div className="img">
          <img src="/images/mobile-login-animate.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Welcome to Stock-skill</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  autoComplete="off"
                  value={formData.userName}
                  name="userName"
                  onChange={handleInputChange}
                  className="input"
                  //   required
                />
              </div>
            </div>
            {errors.userName && <p className="error_text">{errors.userName}</p>}
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  autoComplete="off"
                  value={formData.password}
                  name="password"
                  className="input"
                  onChange={handleInputChange}
                  //   required
                />
              </div>
            </div>
            {errors.password && <p className="error_text">{errors.password}</p>}
            <a className="forgot_password" href="#">
              Forgot Password?
            </a>
            <button className="btn_login" type="submit">
              Login
            </button>
          </form>
        </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;