import UserReducer from './userReducer'
import CourseReducer from './courseReducer'
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
const persistedCourseReducer = persistReducer(coursePersistConfig, UserReducer)

const rootReducer = {
  user: persistedUserReducer,
  course: persistedCourseReducer,
}

export default rootReducer;
