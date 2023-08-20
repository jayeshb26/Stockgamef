import axios from 'axios';
import { AppConstant } from '../../AppConstant';

export const logIn = (formData) => async dispatch => {
  try {
    const userName = formData.userName;
    const password = formData.password;
    
    const response = await axios.post(`${AppConstant.API.URL}auth/login`, { userName, password});
    console.log('RESPONSE',response)
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const logOut = () => ({
  type: 'LOGOUT',
});

