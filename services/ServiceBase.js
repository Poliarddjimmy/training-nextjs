import axios from "axios";
import { CURRENT_API_URL } from '../utils/config';
import { Auth } from '../redux/actions/types';
import { isExpired, decodeToken } from "react-jwt";

const axiosService = axios.create({
  baseURL: CURRENT_API_URL
});

const interceptor = store => {
  axiosService.interceptors.request.use(
    (config) => {
      const { token } = store.getState().user;
      const mutableConfig = { ...config };

      if (token) {
        mutableConfig.headers.common.Authorization = `Bearer ${token}`;
      }

      return mutableConfig;
    },
    (err) => Promise.reject(err),
  );


  //automatic logout if token is expired
  // const isMyTokenExpired = isExpired(store.getState().user.token);
  // if (isMyTokenExpired) {
    store.dispatch({
      type: "/users/logout/pending" 
    })
  // }
  // Add a response interceptor to automatically save the token we got from the server
  // to the state
  axiosService.interceptors.response.use(
    async (response) => {
      if (response.data?.token) {
        // 1. decode the token
        const decodedUser = await decodeToken(response.data.token) ;

        decodedUser.isPasswordReset = response.data.isPasswordReset;

        // 2. save the user and the token to the state
        store.dispatch({
          type: Auth.ADD_SESSION,
          payload: { currentUser: decodedUser, token: response.data.token },
        });
      }

      return response;
    },
    async (error) => {
      if (error.message.includes("401")) {
        store.dispatch({
          type: "/users/logout/pending" 
        })
      }
      if (error.response?.data?.token) {
        // 1. decode the token
        const decodedUser = await decodeToken(error.response.data.token);
        const code = error.response?.data.code;

        store.dispatch({
          type: Auth.ADD_SESSION,
          payload: {
            user: decodedUser,
            token: error.response.data.token,
          },
        });
        // 2. save the user and the token to the state
      }
      return Promise.reject(error);
    },
  );
}

export {
  axiosService,
  interceptor,
};