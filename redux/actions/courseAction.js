import { createAsyncThunk } from "@reduxjs/toolkit";
import { Courses } from "./types";
import API from '../../services/API';


export const fetchCoursesAction = createAsyncThunk(
  Courses.FETCH_COURSES,
  async (payload, thunkAPI) => {
    try {
      const response = await API.fetchCourses();
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const showCourseAction = createAsyncThunk(
  Courses.SHOW_COURSE,
  async (payload, thunkAPI) => {
    try {
      const response = await API.showCourse(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const createCourseAction = createAsyncThunk(
  Courses.CREATE_COURSE,
  async (payload, thunkAPI) => {
    try {
      const response = await API.createCourse(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const editCourseAction = createAsyncThunk(
  Courses.EDIT_COURSE,
  async (payload, thunkAPI) => {
    try {
      const response = await API.editCourse(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const deleteCourseAction = createAsyncThunk(
  Courses.DELETE_COURSE,
  async (payload, thunkAPI) => {
    try {
      const response = await API.deleteCourse(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);


