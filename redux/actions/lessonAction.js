import { createAsyncThunk } from "@reduxjs/toolkit";
import { Lessons } from "./types";
import API from '../../services/API';


export const fetchLessonsAction = createAsyncThunk(
  Lessons.FETCH_LESSONS,
  async (payload, thunkAPI) => {
    try {
      const response = await API.fetchLessons();
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const showLessonAction = createAsyncThunk(
  Lessons.SHOW_LESSON,
  async (payload, thunkAPI) => {
    try {
      const response = await API.showLesson(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const lessonCompletedAction = createAsyncThunk(
  Lessons.LESSON_COMPLETED,
  async (payload, thunkAPI) => {
    try {
      const response = await API.lessonCompleted(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const createLessonAction = createAsyncThunk(
  Lessons.CREATE_LESSON,
  async (payload, thunkAPI) => {
    try {
      const response = await API.createLesson(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const editLessonAction = createAsyncThunk(
  Lessons.EDIT_LESSON,
  async (payload, thunkAPI) => {
    try {
      const response = await API.editLesson(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);

export const deleteLessonAction = createAsyncThunk(
  Lessons.DELETE_LESSON,
  async (payload, thunkAPI) => {
    try {
      const response = await API.deleteLesson(payload);
      return response;
    } catch (e) {
      console.error(e)
    }
  }
);


