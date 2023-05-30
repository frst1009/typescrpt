import axios from 'axios';
import { Users } from './scripts';

export const fetchUsers = () => {
  return (dispatch: any) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error });
      });
  };
};
