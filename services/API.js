import { axiosService } from "./ServiceBase"
import axios from "axios";


class API {
  static login = payload => {
    return axiosService.post(`/auth/login`, payload)
  }

  static signup = payload => {
    return axiosService.post(`/auth/register`, payload)
  }

  static createUser = payload => {
    return axiosService.post(`/users`, payload)
  }

  static fetchUsers = () => {
    return axiosService.get(`/users`);
  }

  static showUser = (payload) => {
    return axiosService.get(`/users/${payload.id}`)
  }

  static editUser = (payload) => {
    return axiosService.put(`/users/${payload.id}`, payload)
  }

  static deleteUser = (payload) => {
    return axiosService.delete(`/users/${payload.id}`)
  }

  static passwordChange = (payload) => {
    return axiosService.post(`/users/password-change`, payload);
  }


  // course andpoint
  static createCourse = payload => {
    return axiosService.post(`/courses`, payload)
  }

  static fetchCourses = () => {
    return axiosService.get(`/courses`);
  }

  static showCourse = (payload) => {
    return axiosService.get(`/courses/${payload}`)
  }

  static editCourse = (payload) => {
    return axiosService.put(`/courses/${payload}`, payload)
  }

  static deleteCourse = (payload) => {
    return axiosService.delete(`/courses/${payload}`)
  }

  // Lesson andpoint
  static createLesson = payload => {
    return axiosService.post(`/lessons`, payload)
  }

  static fetchLessons = () => {
    return axiosService.get(`/lessons`);
  }

  static showLesson = (payload) => {
    return axiosService.get(`/lessons/${payload}`)
  }

  static editLesson = (payload) => {
    return axiosService.put(`/lessons/${payload}`, payload)
  }

  static deleteLesson = (payload) => {
    return axiosService.delete(`/lessons/${payload}`)
  }
}

export default API