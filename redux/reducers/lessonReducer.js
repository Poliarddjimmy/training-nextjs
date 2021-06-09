import {
  fetchLessonsAction,
  showLessonAction,
  createLessonAction,
  editLessonAction,
  deleteLessonAction,
} from "../actions/lessonAction";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  lessons: [],
  lesson: null,
  error: null
}

const LessonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLessonsAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchLessonsAction.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload?.data?.lessons)
      state.lessons = action.payload?.data?.lessons;
    })
    .addCase(fetchLessonsAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(showLessonAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(showLessonAction.fulfilled, (state, action) => {
      state.loading = false;
      state.lesson = action.payload?.data;
    })
    .addCase(showLessonAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(createLessonAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createLessonAction.fulfilled, (state, action) => {
      state.loading = false;
      let lesson = action.payload
      state.lesson = lesson;
      const lessons = state.lessons;
      lessons.push(lesson);
      state.lessons = lessons;
    })
    .addCase(createLessonAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(editLessonAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(editLessonAction.fulfilled, (state, action) => {
      const lesson = action.payload;
      state.loading = false;
      state.lesson = lesson
      state.currentUser = currentUser

      let lessons = state.lessons
      let currentlessonIndex = lessons.findIndex(item => item.id === lesson.id);
      lessons[currentlessonIndex] = lesson
      state.lessons = lessons
    })
    .addCase(editLessonAction.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(deleteLessonAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deleteLessonAction.fulfilled, (state, action) => {
      state.loading = false;
      state.lesson = null;
      const lessons = state.lessons;
      state.lessons = lessons.filter(lesson => lesson.id !== action.payload)
    })
    .addCase(deleteLessonAction.rejected, (state, action) => {
      state.loading = false;
    })
})


export default LessonReducer;