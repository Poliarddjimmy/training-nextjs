
const LOGIN = "users/login";
const LOGOUT = "users/logout";
const SIGNUP = "users/signup";
const ADD_SESSION = "users/add_session";

const FETCH_USERS = "/users";
const SHOW_USER = "users/show";
const EDIT_USER = "users/update";
const CREATE_USER = "users/create";
const DELETE_USER = "users/delete";
const CHANGE_PASSWORD = "users/change-password"

const FETCH_COURSES = "/courses";
const SHOW_COURSE = "courses/show";
const EDIT_COURSE = "courses/update";
const CREATE_COURSE = "courses/create";
const DELETE_COURSE = "courses/delete";


const Auth = {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ADD_SESSION
}

const Users = {
  FETCH_USERS,
  SHOW_USER,
  EDIT_USER,
  CREATE_USER,
  DELETE_USER,
  CHANGE_PASSWORD
}

const Courses = {
  FETCH_COURSES,
  SHOW_COURSE,
  EDIT_COURSE,
  CREATE_COURSE,
  DELETE_COURSE,
}

export {
  Auth,
  Users,
  Courses,
};