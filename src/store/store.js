import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const serializableConfiguration = {
  serializableCheck: {
    ignoredActions: [
      "user/setCurrentUser",
      "persist/PERSIST",
      "user/signInSuccess",
      "user/signInFailed",
      "user/signUpFailed",
    ],
    ignoredPaths: [
      "user.currentUser",
      "user.error",
      "register",
      "payload.createdAt",
    ],
  },
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(serializableConfiguration).concat(middleWares),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
