import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './Redux/Auth/AuthAction';

const MyComponent = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      {loggedIn ? (
        <button onClick={() => dispatch(logOut())}>Log Out</button>
      ) : (
        <button onClick={() => dispatch(logIn())}>Log In</button>
      )}
      <p>{loggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
};

export default MyComponent;
