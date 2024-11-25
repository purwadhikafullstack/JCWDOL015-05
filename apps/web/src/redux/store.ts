import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST, Persistor, persistReducer, persistStore, REGISTER, REHYDRATE } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import customerReducer from "./slice/customerSlice";
import employeeReducer from "./slice/employeeSlice"
import workerReducer from "./slice/workerSlice"
import driverReducer from "./slice/driverSlice"
import outletAdminReducer from "./slice/outletAdminSlice"
import superAdminReducer from "./slice/superAdminSlice"
import attendanceReducer from "./slice/attendanceSlice"


export const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve();
    }
  }
}
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: "store",
  storage,
  timeout: 1000
}
const rootReducer = combineReducers({
  customer: customerReducer,
  employee: employeeReducer,
  worker : workerReducer,
  driver : driverReducer,
  outletAdmin : outletAdminReducer,
  superAdmin: superAdminReducer,
  attendance: attendanceReducer
})
const makeConfiguredStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          REHYDRATE,
          PERSIST,
          REGISTER,
        ],
      },
    }),
})

type StoreWithPersistor = ReturnType<typeof makeConfiguredStore> & { __persistor?: Persistor }

export const makeStore = () => {
  const isServer = typeof window === "undefined"
  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [
              REHYDRATE,
              PERSIST,
              REGISTER
            ],
          },
        }),
    }) as StoreWithPersistor;
    const persistor = persistStore(store)
    store.__persistor = persistor
    return store
  }
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]