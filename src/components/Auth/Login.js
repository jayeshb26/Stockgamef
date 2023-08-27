import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../Redux/Auth/AuthAction";
// import { useToast } from "../Context/ToastProvider";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth);
  // const {showToast} = useToast()
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  useEffect(()=>{
    
  },[loginState])
  useEffect(()=>{
    const token = localStorage.getItem('authToken');
    if(token){
      navigate('/market')
    }
  },[])
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
      console.log('loginState.loggedIn',loginState.loggedIn)
     setTimeout(()=>{
      if (loginState.loggedIn) {
        // showToast('You have successfully logged in','success')
        navigate("/market");
      }
     },1000)
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="login_form">
      <div class="conter">
        <div className="login_logo">
          <img src="/images/matka.png" height={150} alt="" />
        </div>
        <h1>Stock Skill</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_wrapper">
            <label htmlFor="Login ID">Login ID: </label>
            <input
              type="text"
              autoComplete="off"
              value={formData.userName}
              name="userName"
              onChange={handleInputChange}
              required
            />
            {errors.userID && <p>{errors.userID}</p>}
          </div>
          <div className="input_wrapper">
            <label htmlFor="Login ID">Password: </label>
            <input
              type="password"
              autoComplete="off"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              required
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="input_wrapper">
            <button className="btn danger-btn" onClick={handleSubmit} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
