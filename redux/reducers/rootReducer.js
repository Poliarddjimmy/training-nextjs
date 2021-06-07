import userReducer from './userReducer'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage
}
const persistedUserReducer = persistReducer(userPersistConfig, userReducer)

const rootReducer = {
  user: persistedUserReducer,
}

export default rootReducer;
