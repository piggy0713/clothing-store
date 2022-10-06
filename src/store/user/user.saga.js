import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.reducer";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutAuthUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithGooglePopup();
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    switch (error.code) {
      case "auth/user-not-found":
        alert("User not found");
        break;
      case "auth/wrong-password":
        alert("Wrong password");
        break;
      default:
        console.log(error);
    }
    yield put(signInFailed(error));
  }
}

export function* signUpWithEmail({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        alert("Email already in use");
        break;
      default:
        console.log(error);
    }
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* signOut() {
  try {
    yield call(signOutAuthUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest("user/checkUserSession", isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest("user/googleSignInStart", signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest("user/emailSignInStart", signInWithEmail);
}

export function* onEmailSignUpStart() {
  yield takeLatest("user/emailSignUpStart", signUpWithEmail);
}

export function* onSignUpSuccess() {
  yield takeLatest("user/signUpSuccess", signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest("user/signOutStart", signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onEmailSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
