// import { createContext, useEffect, useReducer } from "react";
// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangedListener,
// } from "../utils/firebase/firebase.utils";
// import { createAction } from "../utils/reducer/reducer.utils";

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const value = { currentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
