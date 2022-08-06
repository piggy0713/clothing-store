import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/setCurrentUser"],
        ignoredPaths: ["user.currentUser"],
      },
    }).concat(logger),
});

// import { compose, createStore, applyMiddleware } from "redux";

// import logger from "redux-logger";

// import { rootReducer } from "./rootReducer";

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);
