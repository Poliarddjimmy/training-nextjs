import UserReducer from './userReducer'
import CourseReducer from './courseReducer'
import LessonReducer from './lessonReducer'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage
}
const persistedUserReducer = persistReducer(userPersistConfig, UserReducer)

const coursePersistConfig = {
  key: 'course',
  version: 1,
  storage
}
const persistedCourseReducer = persistReducer(coursePersistConfig, CourseReducer)

const lessonPersistConfig = {
  key: 'lesson',
  version: 1,
  storage
}
const persistedlessonReducer = persistReducer(lessonPersistConfig, LessonReducer)

const rootReducer = {
  user: persistedUserReducer,
  course: persistedCourseReducer,
  lesson: persistedlessonReducer,
}

export default rootReducer;
