import { createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, Users } from "./types";
import API from '../../services/API';


export const loginAction = createAsyncThunk(
  Auth.LOGIN,
  async (payload, thunkAPI) => {
    try {
      const response = await API.login(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const logoutAction = createAsyncThunk(
  Auth.LOGOUT
);

export const registerAction = createAsyncThunk(
  Auth.SIGNUP,
  async (payload, thunkAPI) => {
    try {
      const response = await API.signup(payload);
      console.log(response)
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const fetchUsersAction = createAsyncThunk(
  Users.FETCH_USERS,
  async (payload, thunkAPI) => {
    try {
      const response = await API.fetchUsers();
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const showUserAction = createAsyncThunk(
  Users.SHOW_USER,
  async (payload, thunkAPI) => {
    try {
      const response = await API.showUser(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const createUserAction = createAsyncThunk(
  Users.CREATE_USER,
  async (payload, thunkAPI) => {
    try {
      const response = await API.createUser(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const editUserAction = createAsyncThunk(
  Users.EDIT_USER,
  async (payload, thunkAPI) => {
    try {
      const response = await API.editUser(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const completedByMeAction = createAsyncThunk(
  Users.COMPLETED_BY_ME,
  async (payload, thunkAPI) => {
    try {
      const response = await API.completedBy(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const updatePasswordAction = createAsyncThunk(
  Users.CHANGE_PASSWORD,
  async (payload, thunkAPI) => {
    try {
      const response = await API.changePassword(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);


export const deleteUserAction = createAsyncThunk(
  Users.DELETE_USER,
  async (payload, thunkAPI) => {
    try {
      const response = await API.deleteUser(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

