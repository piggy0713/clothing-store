import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signupForm/signupForm.component";

const SignIn = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={loginGoogleUser}>Sign In With Google</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
