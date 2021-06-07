import { axiosService } from "./ServiceBase"
import axios from "axios";


class API {
  static login = payload => {
    return axiosService.post(`/auth/login`, payload)
  }

  static signup = payload => {
    return axiosService.post(`/auth/register`, payload)
  }

  static users = payload => {
    return axiosService.post(`/users`, payload)
  }

  static fetchUser = payload => {
    return axiosService.get(`/users/${payload}`);
  }

  static editUser = (payload) => {
    return axiosService.put(`/users/${payload.id}`, payload)
  }

  static deleteUser = (payload) => {
    return axiosService.delete(`/users/${payload.id}`, payload)
  }

  static usersList = () => {
    return axiosService.get(`/users`)
  }

  static update = (payload) => {
    return axiosService.put(`/users/${payload.id}`, payload);
  }

  static passwordChange = (payload) => {
    return axiosService.post(`/users/password-change`, payload);
  }
}

export default API