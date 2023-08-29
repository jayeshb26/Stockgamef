import axios from 'axios';
import { AppConstant } from '../../AppConstant';
import { toast } from 'react-toastify';

export const logIn = (formData) => async dispatch => {
  try {
    const userName = formData.userName;
    const password = formData.password;
    
    const response = await axios.post(`${AppConstant.API.URL}auth/login`, { userName, password});
    if(response){
      toast.success('Successfully Logged in');
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    }else{
      toast.error('Invalid creadentials');
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const logOut = () => ({
  type: 'LOGOUT',
});

