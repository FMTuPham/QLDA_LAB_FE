/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import appReducer from '../redux/features/appSlice'
import storage from 'redux-persist/lib/storage'
import userReducer from '../redux/features/userSlice'

// const typedLoggerMiddleware: Middleware<object, any, Dispatch<AnyAction>> = logger as Middleware<
//   object,
//   any,
//   Dispatch<AnyAction>
// >

const rootReducer = combineReducers({
  userReducer,
  appReducer
})

const persistConfig = {
  key: 'movieManagement',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  //middleware: [thunk, typedLoggerMiddleware]
})

const persistor = persistStore(store)
export { persistor, store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
