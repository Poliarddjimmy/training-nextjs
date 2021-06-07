import {
  fetchCoursesAction,
  showCourseAction,
  createCourseAction,
  editCourseAction,
  deleteCourseAction,
} from "../actions/courseAction";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  courses: [],
  course: null,
  error: null
}

const CourseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCoursesAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchCoursesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    })
    .addCase(fetchCoursesAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(showCourseAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(showCourseAction.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    })
    .addCase(showCourseAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(createCourseAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createCourseAction.fulfilled, (state, action) => {
      state.loading = false;
      let course = action.payload
      state.course = course;
      const courses = state.courses;
      courses.push(course);
      state.courses = courses;
    })
    .addCase(createCourseAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(editCourseAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(editCourseAction.fulfilled, (state, action) => {
      const course = action.payload;
      state.loading = false;
      state.course = course
      state.currentUser = currentUser

      let courses = state.courses
      let currentcourseIndex = courses.findIndex(item => item.id === course.id);
      courses[currentcourseIndex] = course
      state.courses = courses
    })
    .addCase(editCourseAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(deleteCourseAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deleteCourseAction.fulfilled, (state, action) => {
      state.loading = false;
      state.course = null;
      const courses = state.courses;
      state.courses = courses.filter(course => course.id !== action.payload)
    })
    .addCase(deleteCourseAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default CourseReducer;