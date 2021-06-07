import {
  fetchUsersAction,
  showUserAction,
  createUserAction,
  editUserAction,
  updatePasswordAction,
  deleteUserAction,
  loginAction,
  logoutAction,
  registerAction
} from "../actions/userAction";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  user: null,
  currentUser: null,
  token: null,
  error: null
}

const UserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      if(action.payload === undefined){
        state.error = "Invalid email or password"
      } 
      else{
        const { user, token } = action.payload.data;
        state.loading = false;
        state.currentUser = user;
        state.token = token;
        state.error = null
      }
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(registerAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(registerAction.fulfilled, (state, action) => {
      const { user, token } = action.payload.data;
      state.loading = false;
      state.currentUser = user;
      state.token = token
    })
    .addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(logoutAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(logoutAction.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null
    })
    .addCase(logoutAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(fetchUsersAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchUsersAction.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUsersAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(showUserAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(showUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(showUserAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(createUserAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createUserAction.fulfilled, (state, action) => {
      state.loading = false;
      let user = action.payload
      state.user = user;
      const users = state.users;
      users.push(user);
      state.users = users;
    })
    .addCase(createUserAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(editUserAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(editUserAction.fulfilled, (state, action) => {
      const user = action.payload;
      state.loading = false;

      var currentUser = state.currentUser

      if(currentUser.id === user?.id){
        currentUser = user
      }
      else{
        state.user = user
      }

      state.currentUser = currentUser

      let users = state.users
      let currentUserIndex = users.findIndex(item => item.id === user.id);
      users[currentUserIndex] = user
      state.users = users
    })
    .addCase(editUserAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(updatePasswordAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(updatePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
    })
    .addCase(updatePasswordAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(deleteUserAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deleteUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
      const users = state.users;
      state.users = users.filter(user => user.id !== action.payload)
    })
    .addCase(deleteUserAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default UserReducer;